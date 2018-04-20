import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import SignupForm from './SignupForm.js';
import { ENDPOINT } from '../config';

class SignupPage extends Component {

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
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
    const errors= this.state.errors;
    errors[field] = '';
    this.setState({
      user,
      errors
    });
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
    // const email = encodeURIComponent(this.state.user.email);
    // const password = encodeURIComponent(this.state.user.password);
    // const name = encodeURIComponent(this.state.user.name);

    const email = this.state.user.email;
    const password = this.state.user.password;
    const name = this.state.user.name;
    //generate http request
    axios.post(`${ENDPOINT}/signup`, {
      email: email,
      password: password,
      name:name,
    })
    .then((response)=> {
      // success

       // change the component-container state
       this.setState({
         errors: {}
       });
       // set a message
       localStorage.setItem('successMessage', response.data.message);
       this.props.history.push("/login");
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
   * Render the component.
   */
  render() {
    return (
      <SignupForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default withRouter(SignupPage);
