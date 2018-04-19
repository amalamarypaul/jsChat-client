import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import LoginForm from './LoginForm.js';
import { ENDPOINT } from '../config';

class LoginPage extends Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);

    //generate http request
    axios.post(`${ENDPOINT}/login`, {
      email: email,
      password: password,
    })
    .then(()=> {
      // success

       // change the component-container state
       this.setState({
         errors: {}
       });

       console.log('The form is valid');
    })
    .catch((error)=> {
      const errors = error.response.data.errors ? error.response.data.errors : {};
        errors.summary = error.response.data.message;

        this.setState({
          errors
        });
    })
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.id;
    const user = this.state.user;
    user[field] = event.target.value;
    const errors = this.state.errors;
    errors[field] = '';
    this.setState({
      user,
      errors
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
