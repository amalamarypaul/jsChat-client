//import packages
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

import { ENDPOINT } from '../config';
import Auth from '../Auth';
import Message from './Message';

class Messages extends Component {
  constructor(){
    super()
    this.state = {
    messages:[],
    loadingMessages:true,
    }
  }

  componentDidMount(){
    const url = `${ENDPOINT}/api/messages`
    // axios.get(url,{ headers:{Authorization: `bearer ${Auth.getToken()}`}})
    axios.get(url)
    .then((response)=>{
      this.setState({messages:response.data});
      console.log(this.state.messages);
    })
    const socket = socketIOClient(ENDPOINT)
    socket.on('new message',(response)=>{
      console.log(response);
      this.setState({
        messages:[...this.state.messages,response ]
      })
    })
  }
  renderMessage=(userMe)=>{
    return this.state.messages.map((item)=>{
       userMe=(item.name===localStorage.getItem('currentUser'))?true:false
      return <Message message={item.message} author={item.name} userMe={userMe}/>
    })
  }
  render(){
    let userMe = true;
    return(
      <div style={{flex:1,alignItems:userMe?'flex-end':'flex-start'}}>
        {this.renderMessage(userMe)}
      </div>
    )
  }
}
export default Messages;
