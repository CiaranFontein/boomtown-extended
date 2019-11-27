import React from "react";
import styles from "./styles";
import { ItemCard } from "../";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const ItemGrid = ({ classes, data }) => {
  return (
    <div>
      <div className={classes.itemGrid}>
        {data.items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

ItemGrid.propTypes = {
  items: PropTypes.array
};

export default withStyles(styles)(ItemGrid);
