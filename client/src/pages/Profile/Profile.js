import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { ItemGrid } from "../../components";

const Profile = ({ classes, data }) => {
  return (
    <Fragment>
      <div className={classes.profileContainer}>
        <div className={classes.profileTitleContainer}>
          <Gravatar email="ciaranfontein@gmail.com" />
          <h1>Ciaran Fontein</h1>
        </div>
        <div className={classes.bio}>
          <p>This is the bio</p>
        </div>
      </div>
      <div className={classes.sharedItemsContainer}>
        <h2>Shared Items</h2>
      </div>
      <ItemGrid data={data} />
    </Fragment>
  );
};

export default withStyles(styles)(Profile);
