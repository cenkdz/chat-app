import React from "react";
import "./App.css";

//Possible component imports
import UserInfo from "./components/UserInfo/UserInfo";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import FormInfo from "./components/FormInfo/FormInfo";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <FormInfo />
        </header>
        <div className="topDiv">
          <UserInfo />
          <div className="topRight"></div>
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
