import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
class ProfileContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <section className={classes.items}>
              <Query
                query={ALL_USER_ITEMS_QUERY}
                variables={{
                  id:
                    this.props.match.path === "/profile/:userid"
                      ? this.props.match.params.userid
                      : viewer.id
                }}
              >
                {({ loading, error, data }) => {
                  if (loading) return <FullScreenLoader />;
                  if (error) return `Error: ${error}`;
                  if (data) {
                    return <Profile data={data.user} />;
                  }
                }}
              </Query>
            </section>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default withStyles(styles)(ProfileContainer);
