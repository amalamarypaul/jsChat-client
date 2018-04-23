import React from 'react';
import Grid from 'material-ui/Grid';

import Messages from './Messages.js';
import NewMessage from './NewMessage.js'
import Header from './Header';

import '../App.css';

const HomePage = () => (
  <div>
    <Header />
    <div className = 'home-container'>
      <Messages />
      <NewMessage/>
    </div>


    {/* <Grid alignItems = 'center' container = { true } direction = 'column' md = { 12 }>
      <Grid md = { 12 } item = { true }>
        <Messages />
        <NewMessage/>
      </Grid>
    </Grid> */}
  </div>
);

const styles = {
  container: {
    margin: 'auto',
    width: '50%',
  }
}

export default HomePage;
