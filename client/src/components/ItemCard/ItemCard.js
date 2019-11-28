import React from "react";
import styles from "./styles";
import {
  withStyles,
  Card,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core";
import { withRouter } from "react-router";
import { UserInfo } from "../";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemCard = ({ item, classes }) => {
  if (item.itemowner) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.cardContainer}>
          <Card className={classes.cardContentContainer}>
            <CardActionArea>
              <CardMedia
                to={`/profile/${item.itemowner.id}`}
                component="img"
                alt="Item Image"
                height="220"
                image={
                  item.imageurl
                    ? item.imageurl
                    : "https://media1.tenor.com/images/190778b3bc8047c8ac636e2485b68a32/tenor.gif?itemid=4722212"
                }
                title="Item Image"
              />
              <CardContent>
                <UserInfo item={item} />
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                {item.tags.map(tag => (
                  <Typography
                    key={tag.id}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tag.title}
                  </Typography>
                ))}
                <Typography className={classes.itemDescription}>
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.borrowButton} variant="contained">
                Borrow
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.cardContainer}>
        <Card className={classes.cardContentContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Item Image"
              height="220"
              image={
                item.imageurl
                  ? item.imageurl
                  : "https://media1.tenor.com/images/190778b3bc8047c8ac636e2485b68a32/tenor.gif?itemid=4722212"
              }
              title="Item Image"
            />
            <CardContent>
              <UserInfo item={item} />
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography
                className={classes.tagsContainer}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {item.tags
                  ? item.tags
                      .map(tag => tag.title)
                      .sort()
                      .join(", ")
                  : null}
              </Typography>
              <Typography className={classes.itemDescription}>
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.borrowButton} variant="contained">
              Borrow
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
};

ItemCard.propTypes = {
  item: PropTypes.object,
  viewer: PropTypes.object
};

export default withRouter(withStyles(styles)(ItemCard));
