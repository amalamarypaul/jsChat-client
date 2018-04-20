import React, { Component } from 'react';
import Card, { CardHeader } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import '../App.css';

class Message extends Component {
  constructor(){
    super()
  }
  render() {
    let userMe = false;
    if (this.props.author===localStorage.getItem('currentUser')) {
      userMe=true;
    }
    return(
      <div style={{alignItems:userMe?'flex-end':'flex-start'}}>
        <Card style={{...styles.messageContainer,backgroundColor:userMe?'darkblue':'green'}}>
          <p style={styles.author}>{ this.props.author }</p>
          <p style={styles.messageText}>{ this.props.message }</p>
        </Card>
      </div>

    );
  }
}
const styles={

  author: {
    fontSize: 20,
    color: 'cyan',
  },
  messageText: {
    fontSize: 18,
    color: 'white',
  },
  messageContainer:{
    borderRadius: 50,
    padding: 20,
    marginTop: 30,
    width: 700,
  }
}
export default Message;
