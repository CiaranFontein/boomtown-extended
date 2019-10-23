import React from "react";
import styles from "./styles";
import { Avatar, withStyles } from "@material-ui/core";
import Gravatar from "react-gravatar";

const UserInfo = ({ expanded, classes }) => {
  return (
    <div className={classes.userShortInfo}>
      <div className="userAvatar">
        <Avatar>
          <Gravatar email="ciaranfontein@gmail.com" />
        </Avatar>
      </div>
      <div className={classes.userInfo}>
        <div className="UserName">username</div>
        <div className="UserDatePosted">a few seconds ago...</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserInfo);
