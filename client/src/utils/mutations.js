import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation($addUserUsername: String!, $addUserEmail: String!, $addUserPassword: String!) {
    addUser(username: $addUserUsername, email: $addUserEmail, password: $addUserPassword) {
        token
        user {
            _id
            username
            email
        }
    }
}


`;