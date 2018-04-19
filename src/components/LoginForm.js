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
  successMessage,
  errors,
  user
}) => (
  <div>
    <Header />
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}
        <div className="field-line">
          <TextField
            label="Email"
            id="email"
            error={ (errors.email || errors.summary) ?true:false } //error prop expecting boolean value
            onChange={onChange}
            value={user.email}
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <div className="field-line">
          <TextField
            label="Password"
            type="password"
            id="password"
            onChange={onChange}
            error={ (errors.password || errors.summary) ? true:false } //error prop expecting boolean value
            value={user.password}
          />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <div className="button-line">
          <Button  variant= 'raised' type="submit" color='primary'>
            Submit
          </Button>
        </div>
        <Typography>Don't have an account?  <Link to="/Signup">Create one</Link> </Typography>
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
