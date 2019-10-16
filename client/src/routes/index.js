import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import { MenuBar } from "../components";
import { Home, Share, Profile, Items } from "../pages";

export default () => {
  return (
    <Fragment>
      <MenuBar />
      <Switch>
        <Route path="/welcome" component={Home} />
        <Route path="/share" component={Share} />
        <Route path="/items" component={Items} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Redirect from="*" to="/items" />
      </Switch>
    </Fragment>
  );

  //To DO check if not logged in go to login
};
