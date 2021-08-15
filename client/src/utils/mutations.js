import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
mutation($bookId: String!, $title: String!, $description: String!, $authors: [String], $link: String, $image: String) {
    saveBook(title: $title, bookId: $bookId, description: $description, authors: $authors, link: $link, image: $image) {
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
mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
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
