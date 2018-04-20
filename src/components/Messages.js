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

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount(){
    const url = `${ENDPOINT}/api/messages`
    // axios.get(url,{ headers:{Authorization: `bearer ${Auth.getToken()}`}})
    axios.get(url)
    .then((response)=>{
      this.setState({messages:response.data});
      this.scrollToBottom();
    })
    const socket = socketIOClient(ENDPOINT)
    socket.on('new message',(response)=>{
      this.setState({
        messages:[...this.state.messages,response ]
      })
      this.scrollToBottom();
    })
  }

  renderMessage=(userMe)=>{
    return this.state.messages.map((item)=>{
       userMe = item.name===localStorage.getItem('currentUser')
      return <Message message={item.message} author={item.name} userMe={userMe}/>
    })
  }

  render(){
    let userMe = true;
    return(
      <div style={ styles.container }>
        {this.renderMessage(userMe)}

        <div ref = { element => { this.messagesEnd = element; } }>
          {
            // dummy div to enable scrolling towards the end of messages
          }
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    maxHeight: '80vh',
    overflowY: 'scroll',
    paddingLeft: 20,
    paddingRight: 20,
  }
}

export default Messages;
