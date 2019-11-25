import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import { MenuBar, PrivateRoute } from "../components";
import { Home, Share, Profile, Items } from "../pages";
import { ViewerContext } from "../context/ViewerProvider";

export default () => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        if (!viewer) {
          return (
            <Switch>
              <Route path="/welcome" component={Home} />
              <Redirect from="*" to="/welcome" />
            </Switch>
          );
        }
        return (
          <Fragment>
            <MenuBar />
            <Switch>
              <PrivateRoute exact path="/share" component={Share} />
              <PrivateRoute exact path="/items" component={Items} />
              <PrivateRoute exact path="/profile/:userid" component={Profile} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Fragment>
        );
      }}
    </ViewerContext.Consumer>
  );
};
