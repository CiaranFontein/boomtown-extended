import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";
class ProfileContainer extends Component {
  render() {
    const { classes, match } = this.props;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <section className={classes.page}>
              <Query
                query={ALL_USER_ITEMS_QUERY}
                variables={{
                  id:
                    match.path === "/profile/:userid"
                      ? match.params.userid
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

ProfileContainer.propTypes = {
  match: PropTypes.object
};

export default withStyles(styles)(ProfileContainer);
