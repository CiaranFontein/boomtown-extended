import React from "react";
import styles from "./styles";
import { withRouter } from "react-router";
import { ItemCard } from "../";
import { GridList, withStyles } from "@material-ui/core";

const ItemGrid = ({ data }) => {
  return (
    <div>
      <GridList cols={3}>
        {data.items.map(tile => (
          <ItemCard key={tile.id} tile={tile} />
        ))}
      </GridList>
    </div>
  );
};

export default withRouter(withStyles(styles)(ItemGrid));
