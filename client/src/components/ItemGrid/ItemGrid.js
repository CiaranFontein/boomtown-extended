import React from "react";
import styles from "./styles";
import { ItemCard } from "../";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const ItemGrid = ({ classes, data }) => {
  const { items } = data;
  if (items.length > 0) {
    return (
      <div className={classes.itemGrid}>
        {data.items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={classes.itemGrid}>
        <div className={classes.noItemsMessage}>No Items Yet!</div>
      </div>
    );
  }
};

ItemGrid.propTypes = {
  items: PropTypes.array
};

export default withStyles(styles)(ItemGrid);
