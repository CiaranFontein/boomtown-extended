// stateful components
import React, { Component } from "react";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import ItemGrid from "../../components/ItemGrid";

class ItemsContainer extends Component {
  render() {
    return (
      <section className="itemsSection">
        <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading";
            if (error) return `Error: ${error}`;
            if (data) {
              return <ItemGrid data={data} />;
            }
          }}
        </Query>
      </section>
    );
  }
}

export default ItemsContainer;
