module.exports = `

  scalar Date

  enum Role {
    VIEWER  
  }
  
  directive @auth(
    requires: Role = VIEWER,
  ) on OBJECT | FIELD_DEFINITION
  
  type Item @auth(requires: VIEWER) {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tag]
    created: Date!
  }

  type User @auth(requires: VIEWER) {
    id: ID!
    email: String!
    items: [Item]
  }

  type Tag {
    id: ID!
    title: String!
  }

  type File @auth(requires: VIEWER) {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
  }

  input AssignedTag {
    title: String!
    id: String!
  }
 
  input SignupInput {
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    login(user: LoginInput!): User!
    logout: Boolean!
    signup(user: SignupInput!): User!
    addItem (item: NewItemInput!): Item 
  }
`;
