import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';
import { ENDPOINT } from '../config';

class NewMessage extends Component {
  constructor(){
    super()
    this.state={
      message:''
    }
  }
  onChange =(event)=>{
    this.setState({
      message:event.target.value
    })
  }
  sendMessage = ()=>{
    const url = `${ENDPOINT}/api/messages`
    axios.post(url,{
      message: this.state.message,
      name: localStorage.getItem('currentUser')
    })
    .then(()=>{
      this.setState({message:''})
    })
  }
  render(){
    return(
      <div style = { styles.container }>
        <TextField
          id = "message"
          placeholder = 'Type your message here'
          onChange = { this.onChange }
          value = { this.state.message }
          style = { styles.textField }
        />
        <Button
          variant = 'raised'
          onClick = { this.sendMessage }
          color = 'secondary'
          style = { styles.button }
        >
          Send
        </Button>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 20,
    padding: 10,
    paddingLeft: 25,
    borderWidth: 3,
    borderColor: 'teal',
    borderStyle: 'solid',
    borderRadius: 50,
    position: 'relative'
  },
  textField: {
    width: '80%',
  },
  button: {
    position: 'absolute',
    right: 10,
    borderRadius: 50,
  }
}

export default NewMessage;
