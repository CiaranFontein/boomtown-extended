import React from "react";
import styles from "./styles";
import { GridListTile, withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import Gravatar from "react-gravatar";

const ItemCard = ({ tile }) => {
  return (
    <GridListTile key={tile.id} width="33.333%" height="300">
      <img src={tile.imageurl} alt={tile.title} />
      <div className="UserShortInfo">
        <div className="userAvatar">
          <Gravatar email="ciaranfontein@gmail.com" />
        </div>
        <div className="UserInfo">
          <div className="UserName">{tile.itemowner.fullname}</div>
          <div className="UserDatePosted">a few seconds ago...</div>
        </div>
      </div>
    </GridListTile>
  );
};

export default withRouter(withStyles(styles)(ItemCard));
