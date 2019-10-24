import React from "react";
import styles from "./styles";
import { Avatar, withStyles } from "@material-ui/core";
import Gravatar from "react-gravatar";

const UserInfo = ({ item, classes }) => {
  return (
    <div className={classes.userShortInfo}>
      <div className="userAvatar">
        <Avatar>
          <Gravatar email={item.itemowner.email} />
        </Avatar>
      </div>
      <div className={classes.userInfo}>
        <div className="UserName">{item.itemowner.fullname}</div>
        <div className="UserDatePosted">a few seconds ago...</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserInfo);
