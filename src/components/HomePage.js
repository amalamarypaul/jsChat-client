import React from 'react';
import Card, { CardHeader } from 'material-ui/Card';

import Messages from './Messages.js';

const HomePage = () => (
  <div>
    <Card className="container">
      <CardHeader title="Message Board" subtitle="This is the home page." />
      <Messages />
    </Card>
  </div>

);

export default HomePage;
