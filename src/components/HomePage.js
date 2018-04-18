import React from 'react';
import Card, { CardHeader } from 'material-ui/Card';

import SignupPage from './SignupPage.js';

const HomePage = () => (
  <Card className="container">
    <CardHeader title="Message Board" subtitle="This is the home page." />
    <SignupPage />
  </Card>
);

export default HomePage;
