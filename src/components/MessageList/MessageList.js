import React from "react";
import Message from "../Message/Message";
import MessageBox from "../MessageBox/MessageBox";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.storeMessages = this.storeMessages.bind(this);
    this.state = {
      Messages: []
    };
  }

  storeMessages(messageInput, currentTime) {
    this.setState({
      Messages: [
        ...this.state.Messages,
        { message: messageInput, time: currentTime }
      ]
    });
  }

  render() {
    return (
      <div className="messageList">
        <div className="contactMessage">
          <p>Dummy message from Steve</p>
          <span>10:30</span>
        </div>
        <Message message={this.state.Messages} />
        <MessageBox enterHandler={this.storeMessages} />
      </div>
    );
  }
}

export default MessageList;
