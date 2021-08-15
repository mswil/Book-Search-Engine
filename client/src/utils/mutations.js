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

export const LOGIN_USER = gql`
mutation($loginEmail: String!, $loginPassword: String!, $addUserUsername: String!, $addUserEmail: String!, $addUserPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation($saveBookTitle: String!, $saveBookBookId: String!, $saveBookDescription: String!) {
    saveBook(title: $saveBookTitle, bookId: $saveBookBookId, description: $saveBookDescription) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            link
            image
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation($removeBookBookId: String!) {
    removeBook(bookId: $removeBookBookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            link
            image
        }
    }
}
`;
