import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/MainPage/Main';
import UserPage from '../pages/UserPage/User';

const routes = (
  <Switch>
		<Route exact path='/users/' component={HomePage} />
		<Route exact path='/' component={HomePage} />
		<Route path='/users/:id' component={UserPage} />
  </Switch> 
)

export default routes;