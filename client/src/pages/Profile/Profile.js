import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { ItemGrid } from "../../components";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";

const Profile = ({ classes, data }) => {
  const { email, fullname, items, borrowed, bio } = data;
  return (
    <Fragment>
      <div className={classes.pageContentContainer}>
        <div className={classes.userInfoPanel}>
          <div className={classes.userInfoHeader}>
            <div className={classes.userAvatar}>
              <Gravatar className={classes.gravatar} email={email} />
            </div>
            <div className={classes.userName}>{fullname}</div>
          </div>
          <div className={classes.boomData}>
            <div className={classes.bold}>{items.length}</div> items shared,
            <div className={classes.bold}>{` ${borrowed.length}`}</div> items
            borrowed
          </div>
          <div className={classes.userBio}>{bio ? bio : "No Bio provided"}</div>
        </div>
        <h2 className={classes.h2}>Shared Items</h2>
        <div className={classes.gridContainer}>
          <ItemGrid data={data} />
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  id: PropTypes.string,
  __typename: PropTypes.string,
  fullname: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  userimageurl: PropTypes.string,
  items: PropTypes.array,
  borrowed: PropTypes.array
};

export default withStyles(styles)(Profile);
