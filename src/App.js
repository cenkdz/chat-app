import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import Utils from './utils/utils';
import UserInfo from './components/UserInfo/UserInfo';
import ContactList from './components/ContactList/ContactList';
import MessageList from './components/MessageList/MessageList';
import Forms from './components/Forms/forms';

import 'firebase/analytics';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  componentDidUpdate() {
    window.location.reload();
  }

  render() {
    if (!Utils.isAuthorized()) {
      return <Redirect to="/" />;
    }
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
