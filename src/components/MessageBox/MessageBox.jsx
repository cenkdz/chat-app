import React from 'react';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    if (e.key === 'Enter') {
      this.props.enterHandler(e.target.value);
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
