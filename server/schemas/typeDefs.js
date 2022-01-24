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
    password: String
  }

  type Habit {
    _id: ID
    name: String
    frequency: Int
    goal: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
