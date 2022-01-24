const { gql } = require("apollo-server-express");
// const habitSchema = require("../models/Habit");

// TODO: query to find all habits for user
// TODO: query to see progress for habit (completed/ skipped)
// TODO: Mutation to addUser
// TODO: Mutaltion to addHabit for user
// TODO: Mutaltion to updateHabit for user

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }
`;
module.exports = typeDefs;
