// stateful components

import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

const tileData = [
  {
    img: "this is image",
    title: "this is title"
  }
];
class ItemsContainer extends Component {
  render() {
    return (
      <section className="itemsSection">
        <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading";
            if (error) return `Error: ${error}`;
            if (data) {
              return (
                <div>
                  <GridList cols={3}>
                    {data.items.map(tile => (
                      <GridListTile key={tile.id}>
                        <img src={tile.imageurl} alt={tile.title} />
                        <GridListTileBar
                          title={tile.title}
                          subtitle={
                            <span>Posted by: {tile.itemowner.fullname}</span>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

export default ItemsContainer;
