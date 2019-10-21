import React from "react";
import styles from "./styles";
import { withRouter } from "react-router";
import { ItemCard } from "../";
import { withStyles } from "@material-ui/core";

const ItemGrid = ({ classes, data }) => {
  return (
    <div>
      <div className={classes.itemGrid}>
        {data.items.map(card => (
          <ItemCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(ItemGrid));
