const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

// TODO: query to see progress for habit (completed/ skipped)
// TODO: Mutation to addHabit for user
// TODO: Mutation to updateHabit for user

const resolvers = {
  Query: {
    // Find all users
    // users: async () => {
    //   return User.find().populate('habits');
    // },

    // Find one user and all their habits 
    // user: async () => {
    //   return User.findOne({ _id: ID });
    // },

    // Context retrieves the logged in user without specifically searching for them 
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You must login to access habits.");
    },
    Mutation: {
      // Create user 
      addUser: async (parent, {username, email, password}) => {
        const user = await User.create({ username, email, password}); 
        const token = signToken(user); 

        return { token, user };
      }, 
      // Existing user
      login: async (parent, {email, password}) => {
        const user = await User.findOne({ email }); 
        const correctPw = await User.isCorrectPassword(password); 

        // If email or password is incorrect, throw the same error 
        if ((!user )|| (!correctPw)) {
          throw new AuthenticationError('Incorrect login credientials'); 
        }; 

        // When user is successfully logged in: 
        const token = signToken(user); 
        return { token, user }
      }
    }
  },
};

module.exports = resolvers;
