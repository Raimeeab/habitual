const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type CompletedHabits { 
    completedAt: String
  }

type Habit {
    habitId: ID
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
    habits: [Habit]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
