import React, { Component } from "react";
import Message from "./Message/Message";
import MessageBox from "../MessageBox/MessageBox";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.setMessages = this.setMessages.bind(this);
    this.state = {
      Messages: []
    };
  }

  setMessages(message, times) {
    console.log("hello:" + message);
    this.setState({
      Messages: [...this.state.Messages, { message: message, time: times }]
    });
  }

  render() {
    return (
      <div className="messageList">
        <div className="messageInfo">
          <p>asdasdasdas</p>
          <span>10:20</span>
        </div>
        <Message message={this.state.Messages} />
        <MessageBox click={this.setMessages} />
      </div>
    );
  }
}

export default MessageList;
