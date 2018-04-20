import React from 'react';
import Card, { CardHeader } from 'material-ui/Card';

import Messages from './Messages.js';
import Header from './Header';

const HomePage = () => (
  <div>
    <Header />
    <Card className="container">
      <Messages />
    </Card>
  </div>

);

export default HomePage;
