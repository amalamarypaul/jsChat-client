//import packages
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

class Messages extends Component {
  constructor(){
    super()
    this.state = {
    endpoint:'http://127.0.0.1:3000',
    messages:[],
    loadingMessages:true,
    }
  }
  componentDidMount(){
    axios.get(`${this.state.endpoint}/api/message`)
    .then((response)=>{
      this.setState({messages:response.data});
      console.log(this.state.messages);
    })
    const socket = socketIOClient(this.state.endpoint)
    socket.on('new message',(response)=>{
      console.log(response);
      this.setState({
        messages:[response, ...this.state.messages ]
      })
    })
  }
  renderMessage=()=>{
    return this.state.messages.map((item)=>{
      return <p key={item._id}>{item.message}</p>
    })
  }
  render(){
    return(
      <div>
        {this.renderMessage()}
      </div>
    )
  }
}
export default Messages;
