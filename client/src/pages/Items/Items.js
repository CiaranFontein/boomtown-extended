import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ItemGrid } from "../../components";

const Items = ({ classes, data }) => {
  return <ItemGrid data={data} />;
};

export default withStyles(styles)(Items);
