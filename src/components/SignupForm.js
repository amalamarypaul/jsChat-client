import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card ,{ CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Header from './Header.js';


import '../App.css';

const SignupForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
    <Header />
    <Card className="container">

      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Sign Up</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            label="Name"
            id="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div className="field-line">
          <TextField
            label="Email"
            id="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div className="field-line">
          <TextField
            label="Password"
            type="password"
            id="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <Button variant='raised' type="submit" color="primary" > Create New Account</Button>
        </div>

        <Typography>Already have an account? <Link to="/login">Login</Link> </Typography>
      </form>
    </Card>
  </div>

);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignupForm;
