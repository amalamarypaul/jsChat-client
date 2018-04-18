import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card  from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';


import '../App.css';
import Header from './Header.js';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div>
    <Header />
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

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
          <Button  variant= 'raised' label="Log in" color='primary'>
            Submit
          </Button>
        </div>

      </form>
    </Card>
  </div>

);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
