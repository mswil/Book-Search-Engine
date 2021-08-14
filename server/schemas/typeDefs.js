const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
}

type Query{
    me: User
    user(username: String, _id: ID) : User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;