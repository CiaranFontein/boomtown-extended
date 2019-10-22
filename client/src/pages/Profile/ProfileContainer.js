import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import {  } from '../../apollo/queries';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import ItemGrid from "../../components/ItemGrid";

class ProfileContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          if (data) {
            console.log("data");
            return <ItemGrid data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default ProfileContainer;
