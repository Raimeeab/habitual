import { gql } from "apollo-server-express";

// TODO: add habits array to type User
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
        frequency: Number 
        goal: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    
`