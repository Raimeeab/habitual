import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      habits {
        _id
        name
        frequency
        journal
        completedHabits {
          completedAt
        }
      }
    }
  }
`;

export const QUERY_HABITS = gql`
  query user($username: String!) {
    user(username: $username) {
      habits {
        name
        frequency
        journal
        completedHabit {
          completedAt
        }
      }
    }
  }
`;
