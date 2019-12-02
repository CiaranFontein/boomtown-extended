import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ItemGrid } from "../../components";
import PropTypes from "prop-types";

const Items = ({ classes, data }) => {
  return (
    <div className={classes.gridContainer}>
      <ItemGrid data={data} />
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array
};

export default withStyles(styles)(Items);
