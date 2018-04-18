import React, { Component } from 'react';
import './App.css';

export default class Message extends Component {
  render() {
    return(
      <div className='Message'>
        <p className='Author'>{ this.props.author }</p>
        <p className='Message-text'}>{ this.props.message }</p>
      </div>
    );
  }
}
