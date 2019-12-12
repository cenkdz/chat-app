import React from 'react';
import './App.css';

// Possible component imports
import UserInfo from './components/UserInfo/UserInfo';
import ContactList from './components/ContactList/ContactList';
import MessageList from './components/MessageList/MessageList';
import Forms from './components/Forms/forms';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidUpdate() {
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <Forms forms={this.props} />
        </header>
        <div className="topDiv">
          <UserInfo />
          <div className="topRight" />
        </div>
        <div className="middleDiv">
          <div className="middleLeftDiv">
            <ContactList forms={this.props} />
          </div>
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
