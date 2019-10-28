import React, { Component } from "react";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import Items from "./Items";
import { FullScreenLoader } from "../../components";
import { ViewerContext } from "../../context/ViewerProvider";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <section className="itemsSection">
              <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
                {({ loading, error, data }) => {
                  if (loading) return <FullScreenLoader />;
                  if (error) return `Error: ${error}`;
                  if (data) {
                    return <Items data={data} />;
                  }
                }}
              </Query>
            </section>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
