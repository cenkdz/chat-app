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
      messageRef: firebase.database().ref(`${this.props.formID}/`),
    };
  }

  componentDidMount() {
    console.log('MESSAGE LIST COMPONENT DID MOUNT');
    this.getMessagesFromCloud(this.state.messageRef);
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({ messageRef: firebase.database().ref(`${nextProps.formID}/`) });
    this.getMessagesFromCloud(this.state.messageRef);
  }

  componentWillUnmount() {
    this.state.messageRef.off();
  }

  getMessagesFromCloud(reference) {
    reference.on('value', (snapshot) => {
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
      sender: localStorage.getItem('username'),
      message: messageInput,
      time: currentTime,
      reciever: this.props.recieverName,
    };
    firebase.database().ref(`${this.props.formID}/`).push(messageObj);
  }

  render() {
    const { recieverName } = this.props;
    return (
      <div className="messageList">
        <Message messages={this.state.messages} recieverName={recieverName} />
        <MessageBox enterHandler={this.storeMessage} />
      </div>
    );
  }
}

export default MessageList;
