import React from 'react';


import Messages from './Messages.js';
import NewMessage from './NewMessage.js'
import Header from './Header';

const HomePage = () => (
  <div>
    <Header />
    <Messages />
    <NewMessage/>
  </div>

);

export default HomePage;
