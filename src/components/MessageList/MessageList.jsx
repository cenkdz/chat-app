import React from 'react';
import * as firebase from 'firebase/app';
import Message from '../Message/Message';
import MessageBox from '../MessageBox/MessageBox';

import 'firebase/analytics';
import 'firebase/database';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.storeMessageToCloud = this.storeMessageToCloud.bind(this);

    const { formID } = this.props;

    this.state = {
      messages: [],
      messageRef: firebase.database().ref(`${formID}`),
    };
  }

  componentDidMount() {
    const { messageRef } = this.state;

    this.getMessagesFromCloud(messageRef);
  }

  componentWillReceiveProps(nextProps) {
    const { messageRef } = this.state;

    this.setState({ messageRef: firebase.database().ref(`${nextProps.formID}/`) });
    this.setState({ messages: [] });
    this.getMessagesFromCloud(messageRef);
  }

  componentWillUnmount() {
    const { messageRef } = this.state;

    messageRef.off();
  }

  getMessagesFromCloud(reference) {
    const { messages } = this.state;
    const { recieverName } = this.props;

    reference.orderByChild('reciever').equalTo(recieverName).on('value', (snapshot) => {
      const currentMessages = snapshot.val();

      if (currentMessages !== null) {
        this.setState({
          messages: [...messages, Object.values(currentMessages)],
        });
      }
    });
  }

  storeMessageToCloud(messageInput) {
    const { recieverName, formID } = this.props;

    const messageObj = {
      sender: localStorage.getItem('username'),
      message: messageInput,
      time: firebase.database.ServerValue.TIMESTAMP,
      reciever: recieverName,
    };
    firebase.database().ref(`${formID}/`).push(messageObj);
  }

  render() {
    const { recieverName } = this.props;
    const { messages } = this.state;

    return (
      <div className="messageList">
        {
          messages ? (
            <Message messages={messages} recieverName={recieverName} />
          ) : null
        }
        <MessageBox enterHandler={this.storeMessageToCloud} />
      </div>
    );
  }
}

export default MessageList;
