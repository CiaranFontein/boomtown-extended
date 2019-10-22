import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { ItemCard } from "../";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => {
        return <ItemCard item={state.item} />;
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default withRouter(withStyles(styles)(ShareItemPreview));
