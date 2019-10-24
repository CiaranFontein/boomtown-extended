import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { ItemGrid } from "../../components";
import Gravatar from "react-gravatar";

const Profile = ({ classes, data }) => {
  return (
    <Fragment>
      <div className={classes.centerChildren}>
        <div className={classes.sharedItemsContainer}>
          <div className={classes.userInfoPanel}>
            <div className={classes.userInfoHeader}>
              <div className={classes.userAvatar}>
                <Gravatar className={classes.gravatar} email={data.email} />
              </div>
              <div className={classes.userName}>{data.fullname}</div>
            </div>
            <div className={classes.boomData}>
              <div className={classes.bold}>{data.items.length}</div> items
              shared, <div className={classes.bold}>{data.borrowed.length}</div>{" "}
              items borrowed
            </div>
            <div className={classes.userBio}>
              {data.bio ? data.bio : "No Bio provided"}
            </div>
          </div>
          <div className={classes.userData}></div>
          <h2 className={classes.h2}>Shared Items</h2>
          <ItemGrid data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Profile);
