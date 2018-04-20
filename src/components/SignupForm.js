import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card  from 'material-ui/Card';
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



        <div className="field-line">
          <TextField
            label="Name"
            id="name"
            error={ errors.name ?true:false }
            onChange={onChange}
            value={user.name}
          />
        </div>
        {errors.name && <p className="error-message">{errors.name}</p>}

        <div className="field-line">
          <TextField
            label="Email"
            id="email"
            error={ errors.email?true:false }
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
            error={ errors.password ?true:false }
            value={user.password}
          />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
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
