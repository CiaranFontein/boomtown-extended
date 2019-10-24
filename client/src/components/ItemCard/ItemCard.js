import React from "react";
import styles from "./styles";
import { withStyles, Card, Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router";
import { UserInfo } from "../";

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

      <UserInfo item={item} />
      <div>
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
