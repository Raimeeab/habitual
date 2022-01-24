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
    # Querable field to retieve an array of habit objects
    habits: [Habit]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Habit {
    _id: ID
    name: String 
    frequency: Int 
    journal: String
    complete: Boolean
    time: Date
  }

  type Query {
    users: [User]
  }

`;
module.exports = typeDefs;
