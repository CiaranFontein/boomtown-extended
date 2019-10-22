import React from "react";
import styles from "./styles";
import { withStyles, Card, Button } from "@material-ui/core";
import { withRouter } from "react-router";
import Gravatar from "react-gravatar";

const ItemCard = ({ item, classes }) => {
  return (
    <Card className={classes.previewCard}>
      <img src={item.imageurl} alt="the item" width="100%" />
      <div className="UserShortInfo">
        <div className="userAvatar">
          <Gravatar email="ciaranfontein@gmail.com" />
        </div>
        <div className={classes.userInfo}>
          <div className="UserName">username</div>
          <div className="UserDatePosted">a few seconds ago...</div>
        </div>
        <div className="iteminfo">
          <div className={classes.itemTitle}>{item.title}</div>
          <div className={classes.itemDescription}>{item.description}</div>
          <Button className={classes.borrowButton} variant="contained">
            Borrow
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(ItemCard));
