import React from 'react';
import moment from 'moment';

class MessageBox extends React.Component {
  constructor({ props }) {
    super(props);
    this.keyPress = this.keyPress.bind(this);

    console.log('Message box');
  }

  keyPress(e) {
    if (e.key === 'Enter') {
      const date = moment().format('HH:mm');
      this.props.enterHandler(e.target.value, date);

      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="newMessageDiv">
        <span className="newMessage">
          <input type="text" onKeyPress={this.keyPress} />
        </span>
      </div>
    );
  }
}

export default MessageBox;
