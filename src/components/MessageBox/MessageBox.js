import React, { Component } from "react";
import Message from "../MessageList/Message/Message";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.keyPress = this.keyPress.bind(this);
    this.state = {
      value: "",
      time: ""
    };
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      console.log("value", e.target.value);
      let mTime = new Date();
      this.setState({ value: e.target.value });
      this.props.click(
        e.target.value,
        mTime.getHours() + "." + mTime.getMinutes()
      );
      e.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <div className="newMessageDiv">
          <span className="newMessage">
            <input type="text" onKeyDown={this.keyPress}></input>
          </span>
        </div>
      </div>
    );
  }
}

export default MessageBox;
