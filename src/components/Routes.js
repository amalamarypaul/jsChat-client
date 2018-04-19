import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
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
    <Redirect to='/login'/>
  )} />
)

const Routes = ()=>(

  <Router>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/Signup" component={SignupPage}/>
      <ProtectedRoute path = "/homepage" component={HomePage} />
    </div>
</Router>

)

export default Routes;
