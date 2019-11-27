import React from "react";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.keyPress = this.keyPress.bind(this);

    this.state = {
      value: "",
      time: ""
    };
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      let mTime = new Date();

      this.setState({ value: e.target.value });

      this.props.click(
        e.target.value,
        mTime.getHours() + ":" + mTime.getMinutes()
      );

      e.target.value = "";
    }
  }

  render() {
    return (
      <div className="newMessageDiv">
        <span className="newMessage">
          <input type="text" onKeyDown={this.keyPress}></input>
        </span>
      </div>
    );
  }
}

export default MessageBox;
