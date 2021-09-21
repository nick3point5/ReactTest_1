import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Main';
import UserPage from '../pages/User';

const routes = (
  <Switch>
		<Route path='/users' component={HomePage} />
		<Route path='/users/:id' component={UserPage} />
  </Switch>
)

export default routes;