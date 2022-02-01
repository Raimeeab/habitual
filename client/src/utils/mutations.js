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

export const ADD_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
        addUser(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword) { 
            token
            user { 
                _id
                username
            }
        }
    }
`;


