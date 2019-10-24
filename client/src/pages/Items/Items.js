import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ItemGrid } from "../../components";

const Items = ({ classes, data }) => {
  return (
    <div>
      <ItemGrid data={data} />
    </div>
  );
};

export default withStyles(styles)(Items);
