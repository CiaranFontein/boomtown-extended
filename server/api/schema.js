const { gql } = require("apollo-server-express");

module.exports = gql`
  # scalar Date

  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tag]
    created: String
    price: Int!
    quantity: Int!
  }

  type User {
    id: ID!
    email: String!
    items: [Item]
    orders: [Item]
  }

  type Tag {
    id: ID!
    title: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    imageurl: String
    description: String
    tags: [AssignedTag]!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    item(id: ID!): Item
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    signup(user: SignUpInput): AuthPayload!
    login(user: LoginInput): AuthPayload!
    logout: Boolean!
    addItem(input: NewItemInput): Item
  }
`;
