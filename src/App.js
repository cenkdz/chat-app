import React from 'react';
import './App.css';

// Possible component imports
import UserInfo from './components/UserInfo/UserInfo';
import ContactList from './components/ContactList/ContactList';
import MessageList from './components/MessageList/MessageList';
import FormInfo from './components/FormInfo/FormInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formID: props.location.pathname.substring(props.location.pathname.lastIndexOf('/') + 1),
    };
  }


  render() {
    return (
      <div className="container">
        <p>{this.state.formID}</p>
        <header className="App-header">
          <FormInfo />
        </header>
        <div className="topDiv">
          <UserInfo />
          <div className="topRight" />
        </div>
        <div className="middleDiv">
          <div className="middleLeftDiv">
            <ContactList formID={this.state.formID} />
          </div>
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
