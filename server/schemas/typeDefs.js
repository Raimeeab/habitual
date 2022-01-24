const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    # Querable field to retieve an array of habit objects
    habits: [Habit]
  }

  # TODO: test if Authentication works 
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
    time: String
  }

  type Query {
    users: [User]
  }

`;
module.exports = typeDefs;
