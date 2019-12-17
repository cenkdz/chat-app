import React from 'react';
import * as firebase from 'firebase/app';
import Message from '../Message/Message';
import MessageBox from '../MessageBox/MessageBox';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.storeMessage = this.storeMessage.bind(this);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val();

      if (currentMessages != null) {
        this.setState({
          messages: [...this.state.messages, Object.values(currentMessages)],
        });
      }
    });
  }

  storeMessage(messageInput, currentTime) {
    const messageObj = {
      message: messageInput,
      time: currentTime,
    };
    firebase.database().ref('messages/').push(messageObj);
  }

  render() {
    return (
      <div className="messageList">
        <div className="contactMessage">
          <p>Dummy message from ...</p>
          <span>10:30</span>
        </div>
        <Message messages={this.state.messages} />
        <MessageBox enterHandler={this.storeMessage} />
      </div>
    );
  }
}

export default MessageList;
