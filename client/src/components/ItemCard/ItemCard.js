import React from "react";
import styles from "./styles";
import { withStyles, Card, Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router";
import { UserInfo } from "../";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemCard = ({ item, classes }) => {
  if (item.itemowner) {
    return (
      <Link to={`/profile/${item.itemowner.id}`}>
        <Card className={classes.previewCard}>
          <div className={classes.imageContainer}>
            <img
              src={
                item.imageurl
                  ? item.imageurl
                  : "https://media1.tenor.com/images/190778b3bc8047c8ac636e2485b68a32/tenor.gif?itemid=4722212"
              }
              alt="the item"
              width="100%"
              height="100%"
            />
          </div>

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
      </Link>
    );
  } else {
    return (
      <Card className={classes.previewCard}>
        <div className={classes.imageContainer}>
          <img
            src={
              item.imageurl
                ? item.imageurl
                : "https://media1.tenor.com/images/190778b3bc8047c8ac636e2485b68a32/tenor.gif?itemid=4722212"
            }
            alt="the item"
            width="100%"
            height="100%"
          />
        </div>

        <UserInfo item={item} />
        <div>
          <h2 className={classes.itemTitle}>{item.title}</h2>
          <div className={classes.tagsContainer}>
            <p>
              {item.tags
                ? item.tags
                    .map(tag => tag.title)
                    .sort()
                    .join(", ")
                : null}
            </p>
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
  }
};

ItemCard.propTypes = {
  item: PropTypes.object,
  viewer: PropTypes.object
};

export default withRouter(withStyles(styles)(ItemCard));
