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
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDq5VA2zHx6-ecl0INAfxlEWfz3u9YLSXQ',
  authDomain: 'chatapp-e24fd.firebaseapp.com',
  databaseURL: 'https://chatapp-e24fd.firebaseio.com',
  projectId: 'chatapp-e24fd',
  storageBucket: 'chatapp-e24fd.appspot.com',
  messagingSenderId: '383365689256',
  appId: '1:383365689256:web:238ed22ff84598c03ef79d',
  measurementId: 'G-NWFWFD29LB',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log('APP INSTALLED');

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
