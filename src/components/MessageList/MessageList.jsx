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
    const messageRef = firebase.database().ref('messages/');

    messageRef.on('value', (snapshot) => {
      const currentMessages = snapshot.val();

      if (currentMessages != null) {
        this.setState({
          messages: [...this.state.messages, Object.values(currentMessages)],
        });
      }
    });
  }

  componentWillUnmount() {
    const messageRef = firebase.database().ref('messages/');
    messageRef.off();
  }

  storeMessage(messageInput, currentTime) {
    const messageObj = {
      name: localStorage.getItem('username'),
      message: messageInput,
      time: currentTime,
    };
    firebase.database().ref('messages/').push(messageObj);
  }

  render() {
    return (
      <div className="messageList">
        <Message messages={this.state.messages} senderName={this.props.senderName} />
        <MessageBox enterHandler={this.storeMessage} />
      </div>
    );
  }
}

export default MessageList;
