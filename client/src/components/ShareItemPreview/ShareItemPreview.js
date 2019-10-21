import React from "react";
import styles from "./styles";
import { withStyles, Card, Button } from "@material-ui/core";
import { withRouter } from "react-router";
import Gravatar from "react-gravatar";

const ShareItemPreview = ({ classes }) => {
  return (
    <Card className={classes.previewCard}>
      <img
        src="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"
        alt="the item"
        width="100%"
      />
      <div className="UserShortInfo">
        <div className="userAvatar">
          <Gravatar email="ciaranfontein@gmail.com" />
        </div>
        <div className={classes.userInfo}>
          <div className="UserName">username</div>
          <div className="UserDatePosted">a few seconds ago...</div>
        </div>
        <div className="iteminfo">
          <div className={classes.itemTitle}>Item title</div>
          <div>Item description</div>
          <Button className={classes.borrowButton} variant="contained">
            Borrow
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(ShareItemPreview));
