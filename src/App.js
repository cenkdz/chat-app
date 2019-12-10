import React from 'react';
import './App.css';

// Possible component imports
import UserInfo from './components/UserInfo/UserInfo';
import ContactList from './components/ContactList/ContactList';
import Contact from './components/Contact/Contact';
import MessageList from './components/MessageList/MessageList';
import FormInfo from './components/FormInfo/FormInfo';
import Form from './components/Form/Form';

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
            <Contact formID={this.state.formID} />
          </div>
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
