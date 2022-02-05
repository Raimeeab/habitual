import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// TODO: need to fix userInput mutation, keep getting error: 
// "message":"Variable \"$userInput\" of required type \"UserInput!\" was not provided."
export const ADD_USER = gql`
  mutation signUp($userInput: UserInput!) {
    signUp(userInput: $userInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_HABIT = gql`
  mutation addHabit($name: String!, $frequency: String!, $journal: String) {
    addHabit(name: $name, frequency: $frequency, journal: $journal) {
      name
      frequency
      journal
    }
  }
`;

export const REMOVE_HABIT = gql`
mutation removeHabit($_id: ID) {
  removeHabit(_id:$_id) {
    _id
  }
}
`

export const COMPLETE_HABIT = gql`
mutation completedHabit($id: ID) {
  completedHabit(_id: $id) {
    completedHabits {
      completedAt
    }
  }
}
`

