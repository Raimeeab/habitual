const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { validateUserInput } = require("../utils/validators");

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
    signUp: async (parent, { userInput }) => {
      let { username, email, password, confirmPassword } = userInput;

      // Use validators to ensure user input meets criteria
      const { valid, errors } = validateUserInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Validation errors", { errors });
      }

      // let user = await User.findOne({ username });
      // if (user) {
      //   throw new UserInputError("Username already exists", {
      //     errors:  {
      //       username: "This username is taken"
      //     }
      //   });
      // };

      user = await User.create(userInput);
      const token = signToken(user);
      return { token, user };
    },
    // Existing user
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
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
    // Add habit to existing user
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
        // TODO: User can't have same habit name entered twice

        if (!findUser) {
          return null;
        } else {
          // Retrieve habits array from user & return the new habit
          return findUser.habits.find((habit) => {
            return habit.name === name;
          });
        }
      } else {
        throw new AuthenticationError("You must be logged in!");
      }
    },
    // DELETE habit
    removeHabit: async (parent,  habitId , context) => {
      // TODO: If habit does not exist, throw an error
      
      if (context.user) {
        return User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: { habits: {
              _id: habitId }},
          }
        );
      }
      throw new AuthenticationError("You must be logged in!"); 
    },
    // TODO: Mutation to updateHabit for user
    // TODO: Mutation to create completedHabit for habit
  },
};

module.exports = resolvers;
