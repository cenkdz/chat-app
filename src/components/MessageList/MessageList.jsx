import React from 'react';
import Message from '../Message/Message';
import MessageBox from '../MessageBox/MessageBox';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.storeMessages = this.storeMessages.bind(this);
    this.state = {
      messages: [],
    };
  }


  storeMessages(messageInput, currentTime) {
    this.setState({
      messages: [...this.state.messages, { message: messageInput, time: currentTime }],
    });
  }

  render() {
    return (
      <div className="messageList">
        <div className="contactMessage">
          <p>Dummy message from ...</p>
          <span>10:30</span>
        </div>
        <Message messages={this.state.messages} />
        <MessageBox enterHandler={this.storeMessages} />
      </div>
    );
  }
}

export default MessageList;
