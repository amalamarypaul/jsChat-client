import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Card, { CardHeader } from 'material-ui/Card';
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

      <div >
        <div className="field-line">
          <TextField
            id="message"
            placeholder='Type your message here'
            onChange={this.onChange}
            value={this.state.message}
          />
          <Button  variant= 'raised' onClick={this.sendMessage} color='primary'>
            Submit
          </Button>
        </div>
      </div>

  );
}
}

export default NewMessage;
