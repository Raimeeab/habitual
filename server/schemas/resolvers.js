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
      const userData = await User.find({}).populate("habits");

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

      // Allows for app to be used in social network context in the future
      let user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username already exists", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      user = await User.create(userInput);
      const token = signToken(user);
      return { token, user };
    },
    // Existing user
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      const correctPw = await user.isCorrectPassword(password);

      // If email or password is incorrect, throw the same error
      if (!user || !correctPw) {
        throw new AuthenticationError("Incorrect login credentials");
      }

      // When user is successfully logged in:
      const token = signToken(user);
      return { token, user };
    },
    // CREATE habit
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
    removeHabit: async (parent, habitId, context) => {
      // TODO: If habit does not exist, throw an error

      if (context.user) {
        return User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: {
              habits: {
                _id: habitId,
              },
            },
          }
        );
      }
      throw new AuthenticationError("You must be logged in!");
    },
    // CREATE timestamp when habit is completed
    completedHabit: async (parent, { _id }, context) => {
      if (context.user) {
        // create a new timestamp
        const now = Date.now();
        // find the user
        const user = await User.findOne({
          _id: context.user._id,
        });

        let updatedHabit = null;
        // update the matching habit using map
        user.habits = user.habits.map((habit) => {
          // if _id match, then add a new completed habit timestamp
          if (habit._id.toString() === _id) {
            const completed = { completedAt: now };
            habit.completedHabits.addToSet(completed);
            updatedHabit = habit;
          }
          // return mapped habit value (inner map function return)
          return habit;
        });
        // save changes to the user instance
        const updated = await user.save();
        // return the updated habit, tracked while mapping
        return updatedHabit;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    // UPDATE habit - NOT MVP !
    updateHabit: async (parent, args, context) => {

      if (context.user) {
        // Find the user by id (auth)
        const user = await User.findOne({
          _id: context.user._id,
        });

        const habit = user.habits.find((habit) => {
          return habit._id === args._id;
        });

        habit.name = args.name;
        habit.frequency = args.frequency;
        habit.journal = args.journal;

        const updateUser = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $set: {
              habits: user.habit,
            },
          },
          {
            new: true,
          }
        );
        return updateUser;
      }

      throw new AuthenticationError("You must be logged in!");
    },
  },
};

module.exports = resolvers;
