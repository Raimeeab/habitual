const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

// TODO: Mutation to see progress for habit (completed/ skipped)
// TODO: Mutation to updateHabit for user

const resolvers = {
  Query: {
    // Find all users
    users: async () => {
      console.log("users function running");
      const userData = await User.find({}).populate("habits");
      console.log(userData);

      return userData;
    },

    // Context retrieves the logged in user without specifically searching for them
    userById: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("habits")
          .populate("completedHabits");
      }
      throw new AuthenticationError("You must login to access habits.");
    },
  },
  Mutation: {
    // Create new user
    signUp: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    // Existing user
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      console.log("user in resolvers:", user);
      const correctPw = await user.isCorrectPassword(password);

      console.log(correctPw);

      // If email or password is incorrect, throw the same error
      if (!user || !correctPw) {
        throw new AuthenticationError("Incorrect login credentials");
      }

      // When user is successfully logged in:
      const token = signToken(user);
      return { token, user };
    },
    addHabit: async (parent, { name, frequency, journal }, context) => {
      let newHabit = { name, frequency, journal };
      // Auth user
      if (context.user) {
        // Get user info from context
        const findUser = await User.findOneAndUpdate(
          // Add new habit into user model
          { _id: context.user._id },
          {
            $addToSet: { habits: newHabit },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        if (!findUser) {
          return null;
        } else {
          return findUser.habits.find((habit)=> {
           return   habit.name === name;
          });
        }
      } else {
        throw new AuthenticationError("Y∏ou need to be logged in!");
      }
    },
  },
};

module.exports = resolvers;
