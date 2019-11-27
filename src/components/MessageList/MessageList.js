import React from "react";
import Message from "../Message/Message";
import MessageBox from "../MessageBox/MessageBox";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.setMessages = this.setMessages.bind(this);
    this.state = {
      Messages: []
    };
  }

  setMessages(message, times) {
    this.setState({
      Messages: [...this.state.Messages, { message: message, time: times }]
    });
  }

  render() {
    return (
      <div className="messageList">
        <div className="messageInfo">
          <p>Dummy message from Steve</p>
          <span>10:30</span>
        </div>
        <Message message={this.state.Messages} />
        <MessageBox click={this.setMessages} />
      </div>
    );
  }
}

export default MessageList;
