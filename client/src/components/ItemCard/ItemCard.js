import React from "react";
import styles from "./styles";
import { withStyles, Card } from "@material-ui/core";
import { withRouter } from "react-router";
import Gravatar from "react-gravatar";

const ItemCard = ({ card, classes }) => {
  return (
    <Card key={card.id} className={classes.itemCard}>
      <div className={classes.cardImageContainer}>
        <img
          className={classes.cardImage}
          src={card.imageurl}
          alt={card.title}
        />
      </div>
      <div className="UserShortInfo">
        <div className="userAvatar">
          <Gravatar email="ciaranfontein@gmail.com" />
        </div>
        <div className="UserInfo">
          <div className="UserName">{card.itemowner.fullname}</div>
          <div className="UserDatePosted">a few seconds ago...</div>
        </div>
      </div>
      <div className="iteminfo">
        <h2 className={classes.cardTitle}>{card.title}</h2>
        <div>{card.description}</div>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(ItemCard));
