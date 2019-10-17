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
      fullname
      email
      bio
    }
  }
`;

export const ALL_ITEMS_QUERY = gql`
  query getItems($id: ID) {
    items(filter: $id) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const ITEM_QUERY = gql`
  query {
    item(id: 1) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    ...ItemFields
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

// //maybe should pass item and image only mystery!
// export const ADD_ITEM_MUTATION = gql`
//   mutation addItem($item: NewItemInput!) {
//     addItem(input: { title: $title, description: $description, tags: $tags }) {
//       title
//       description
//       tags {
//         id
//         title
//       }
//     }
//   }
// `;

/**
 * Auth-related queries and mutations.
 */

// export const VIEWER_QUERY = gql`
//   query {
//     # @TODO: Query the id, email, fullname, and bio fields for the viewer.
//   }
// `;
// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `;

// export const SIGNUP_MUTATION = gql`
//   mutation signup($user: SignupInput!) {
//     # @TODO: Pass the user into the signup mutation as an argument
//     # and return the token and user id.
//   }
// `;

// export const LOGIN_MUTATION = gql`
//   mutation login($user: LoginInput!) {
//     # @TODO: Pass the user into the login mutation as an argument
//     # and return the token and user id.
//   }
// `;
