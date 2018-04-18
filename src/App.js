//import packages
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import Routes from './components/Routes.js';


//Make the app component
class App extends Component {
  // render method that renders in code if the state is updated
  render() {
    return (
      <Routes />
    );
  }
}

//Exporting component to be available everywhere in project
export default App;
