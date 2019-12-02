import React from "react";
import styles from "./styles";
import { Avatar, withStyles } from "@material-ui/core";
import Gravatar from "react-gravatar";
import * as moment from "moment";
import PropTypes from "prop-types";
let nowMoment = (dateNow = new Date()) => {
  return moment(dateNow).fromNow();
};

const UserInfo = ({ item, classes }) => {
  return (
    <div className={classes.userShortInfo}>
      <div className="userAvatar">
        <Avatar>
          <Gravatar
            email={
              item.itemowner ? item.itemowner.email : "defaultemail@gmail.com"
            }
          />
        </Avatar>
      </div>
      <div className={classes.userInfo}>
        <div className="UserName">
          {item.itemowner ? item.itemowner.fullname : "Your Name"}
        </div>
        {item.created ? (
          <div className="UserDatePosted">{nowMoment(item.created)}</div>
        ) : (
          "A long time ago"
        )}
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  created: PropTypes.string.isRequired,
  description: PropTypes.string,
  formErrors: PropTypes.string,
  imageurl: PropTypes.string,
  itemOwner: PropTypes.shape({
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(UserInfo);
