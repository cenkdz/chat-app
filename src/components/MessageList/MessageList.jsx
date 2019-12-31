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

    this.state = {
      messages: [],
      formID,
      loading: true,
    };
  }

  async componentDidMount() {
    this.getMessagesFromCloud();
    await (Utils.wait(3000));
    this.setState({
      loading: false,
    });
  }

  async componentWillReceiveProps(nextProps) {
    const { formID } = this.props;
    console.log(nextProps);

    this.setState({
      loading: true,
    });
    this.setState({ messages: [] });
    this.getMessagesFromCloud();
    await (Utils.wait(3000));
    this.setState({
      loading: false,
    });
  }

  getMessagesFromCloud() {
    const { formID, messages } = this.state;
    const { recieverName } = this.props;

    const reference = firebase.database().ref(`${formID}`);

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
    console.log(this.props, this.state);

    if (this.state.loading) return <Loader />;

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
