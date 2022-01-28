const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Embedded in Habits - holds all timestamps of when a habit is completed
  type CompletedHabits {
    completedAt: String
  }

  # Embedded in User - holds a list of habits created by user
  type Habit {
    _id: ID
    name: String!
    frequency: Int!
    journal: String
    completedHabits: [CompletedHabits]
  }

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

  type Query {
    userById: User
    users: [User]
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Mutation {
    # User
    signUp(userInput: UserInput!): Auth
    login(username: String!, password: String!): Auth
    # Habit
    addHabit(name: String!, frequency: Int!, journal: String): Habit
    removeHabit(_id: ID): Habit
    updateHabit(_id: ID, name: String, frequency: Int, journal: String): Habit
  }
`;
module.exports = typeDefs;
