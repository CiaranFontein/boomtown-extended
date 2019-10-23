import React from "react";
import styles from "./styles";
import {
  withStyles,
  Card,
  Button,
  Typography,
  Avatar
} from "@material-ui/core";
import { withRouter } from "react-router";
import Gravatar from "react-gravatar";

const ItemCard = ({ item, classes }) => {
  return (
    <Card className={classes.previewCard}>
      <img
        src={
          item.imageurl
            ? item.imageurl
            : "https://media1.tenor.com/images/190778b3bc8047c8ac636e2485b68a32/tenor.gif?itemid=4722212"
        }
        alt="the item"
        width="100%"
      />

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
      <div className="iteminfo">
        <h2 className={classes.itemTitle}>{item.title}</h2>
        <div className={classes.tagsContainer}>
          {item.tags.map(tag => (
            <p key={tag.id} className={classes.itemTag}>
              {tag.title}
            </p>
          ))}
        </div>
        <Typography className={classes.itemDescription}>
          {item.description}
        </Typography>
        <Button className={classes.borrowButton} variant="contained">
          Borrow
        </Button>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(ItemCard));
