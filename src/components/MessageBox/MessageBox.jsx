import React from 'react';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    const { enterHandler } = this.props;
    if (e.key === 'Enter') {
      enterHandler(e.target.value);
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
