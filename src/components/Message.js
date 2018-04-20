import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import '../App.css';

class Message extends Component {
  render() {
    return(
      <Grid md = { 6 }>
        <Card style={{...styles.messageContainer,backgroundColor:(this.props.userMe)?'darkblue':'green'}}>
          <p style={styles.author}>{ this.props.author }</p>
          <p style={styles.messageText}>{ this.props.message }</p>
        </Card>
      </Grid>
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
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  }
}
export default Message;
