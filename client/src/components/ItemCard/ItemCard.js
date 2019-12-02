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
const FALLBACK_IMAGE_URL =
  "https://images.unsplash.com/photo-1442124920820-8e5f4b07b563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80";
const ItemCard = ({ item, classes }) => {
  const onMediaFallback = event => {
    console.log("Image not valid");
    return (event.target.src = FALLBACK_IMAGE_URL);
  };
  if (item.itemowner) {
    return (
      <div className={classes.pageContainer}>
        <div className={classes.cardContainer}>
          <Card className={classes.cardContentContainer}>
            <CardActionArea>
              <Link
                to={`/profile/${item.itemowner.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia
                  component="img"
                  alt="Item Image"
                  height="220"
                  image={
                    item.imageurl
                      ? item.imageurl
                      : "https://images.unsplash.com/photo-1442124920820-8e5f4b07b563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  }
                  title="Item Image"
                  onError={onMediaFallback}
                />
                <CardContent>
                  <UserInfo item={item} className={classes.noTextDecoration} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.noTextDecoration}
                    noWrap={false}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="secondary"
                    component="p"
                    className={classes.noTextDecoration}
                  >
                    {item.tags
                      ? item.tags
                          .map(tag => tag.title)
                          .sort()
                          .join(", ")
                      : null}
                  </Typography>
                  <Typography className={classes.noTextDecoration}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Borrow</Button>
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
                  : "https://images.unsplash.com/photo-1442124920820-8e5f4b07b563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            <Button variant="contained">Borrow</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    imageurl: PropTypes.string,
    tags: PropTypes.array,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  })
};

export default withRouter(withStyles(styles)(ItemCard));
