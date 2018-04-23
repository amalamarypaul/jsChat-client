import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Main from './Main.js';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage.js';
import Auth from '../Auth';

const ProtectedRoute =({ component:Component, ...rest})=>(
  <Route {...rest} render={(props)=>(
    Auth.isUserAuthenticated()
    ?
    <Component {...props}/>
    :
    <Redirect to='/'/>
  )} />
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render = { (props) => (
    Auth.isUserAuthenticated()
    ?
    <Redirect to ='/homepage' />
    :
    <Component {...props}/>
  )} />
)

const Routes = ()=>(
  <Router>
    <div>
      <LoggedOutRoute exact path="/" component={LoginPage}/>
      <LoggedOutRoute path="/Signup" component={SignupPage}/>
      <ProtectedRoute path = "/homepage" component={HomePage} />
    </div>
</Router>

)

export default Routes;
