import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Main from './Main.js';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage.js';


const Routes = ()=>(

  <Router>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/Signup" component={SignupPage}/>
    </div>
</Router>

)

export default Routes;
