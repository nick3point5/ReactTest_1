import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/MainPage/Main";
import UserPage from "../pages/UserPage/User";

const routes = (
  <Switch>
    <Route exact path="/users/" component={HomePage} />
    <Route path="/users/:id" component={UserPage} />
		<Redirect to='/users' />
  </Switch>
);

export default routes;
