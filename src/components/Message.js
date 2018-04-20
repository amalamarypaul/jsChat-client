import React, { Component } from 'react';
import Card from 'material-ui/Card';
import '../App.css';

class Message extends Component {
  render() {
    return(
      <div>
        <Card style={{...styles.messageContainer,backgroundColor:(this.props.userMe)?'darkblue':'green'}}>
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
