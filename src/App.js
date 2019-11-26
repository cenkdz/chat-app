import React, { Component } from "react";
import "./App.css";

//Possible component imports
import UserInfo from "./components/UserInfo/UserInfo";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import MessageBox from "./components/MessageBox/MessageBox";
import FormInfo from "./components/FormInfo/FormInfo";

class App extends Component {
  state = {
    messages: [
      {
        messageh: "New Message",
        time:
          new Date().getHours() +
          "+" +
          Date().getMinutes +
          "+" +
          Date().getSeconds
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <header classname="App-header">
          <FormInfo />
        </header>
        <div className="topDiv">
          <UserInfo />
          <div className="topRight">
            <ContactList />
          </div>
        </div>
        <div className="middleDiv">
          <div className="middleLeftDiv">
            <ContactList />
          </div>
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
