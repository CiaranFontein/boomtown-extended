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
                <Gravatar
                  className={classes.gravatar}
                  email="ciaranfontein@gmail.com"
                />
              </div>
              <div className={classes.userName}>Ciaran Fontein</div>
            </div>
            <div className={classes.boomData}>
              2 items shared, 0 items borrowed
            </div>
            <div className={classes.userBio}>No bio provided</div>
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
