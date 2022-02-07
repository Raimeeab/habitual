import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query userById {
    userById {
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
