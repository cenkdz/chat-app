import React from 'react';
import * as firebase from 'firebase/app';
import Message from '../Message/Message';
import MessageBox from '../MessageBox/MessageBox';
import Loader from '../../Loader';
import Utils from '../../utils/utils';
import 'firebase/analytics';
import 'firebase/database';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.storeMessageToCloud = this.storeMessageToCloud.bind(this);

    const { formID } = this.props;

    this.listener = firebase.database().ref(`${formID}`);

    this.state = {
      messages: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.getMessagesFromCloud(this.props);
    await (Utils.wait(2000));
    this.setState({
      loading: false,
    });
  }

  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
    });
    this.getMessagesFromCloud(nextProps);
    await (Utils.wait(1000));
    this.setState({
      loading: false,
    });
  }

  getMessagesFromCloud(props) {
    this.listener.off();

    this.listener = firebase.database().ref(`${props.formID}`);

    this.listener.orderByChild('reciever').equalTo(props.recieverName).on('value', (snapshot) => {
      const currentMessages = snapshot.val();

      if (currentMessages !== null) {
        this.setState({
          messages: [Object.values(currentMessages)],
        });
      } else if (currentMessages === null) {
        this.setState({
          messages: [],
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
    const { messages, loading } = this.state;

    if (loading) return <Loader />;

    if (messages.length > 0) {
      return (
        <div className="messageList">
          <Message messages={messages} recieverName={recieverName} />
          <MessageBox enterHandler={this.storeMessageToCloud} />
        </div>
      );
    }

    if (messages.length === 0) {
      return (
        <div>
          <div className="middleRightDiv"><h3>No messages were found. You can send the first message right now</h3></div>
          <MessageBox enterHandler={this.storeMessageToCloud} />
        </div>
      );
    }

    return null;
  }
}

export default MessageList;
