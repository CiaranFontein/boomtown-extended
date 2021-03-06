import gql from "graphql-tag";

/**
 * Item and user-related queries and mutations.
 */
const ItemFields = gql`
  fragment ItemFields on Item {
    id
    title
    imageurl
    description
    created
    tags {
      id
      title
    }
    itemowner {
      id
      email
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  query getItems($filter: ID) {
    items(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      items {
        ...ItemFields
      }
    }
  }
  ${ItemFields}
`;

export const ALL_TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
  }
`;

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($input: NewItemInput!) {
    addItem(input: $input) {
      title
      imageurl
      description
      tags {
        id
        title
      }
    }
  }
`;

/**
 * Auth-related queries and mutations.
 */
export const VIEWER_QUERY = gql`
  query {
    viewer {
      id
      email
    }
  }
`;
export const LOGOUT_MUTATION = gql`
  mutation {
    logout
  }
`;
export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignUpInput!) {
    signup(user: $user) {
      token
      user {
        id
        email
      }
    }
  }
`;
export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      token
      user {
        id
        email
      }
    }
  }
`;
