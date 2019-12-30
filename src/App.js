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
  constructor(props) {
    super(props);
    this.state = {
      formID: '',
      recieverName: '',
      clicked: false,
    };
    this.logout = this.logout.bind(this);
    this.parentFunc = this.parentFunc.bind(this);
    this.setFormID = this.setFormID.bind(this);
  }

  async setFormID(ID) {
    console.log('STATE BEFORE', this.state);
    await this.setState({ formID: ID, clicked: false });
    console.log('STATE AFTER', this.state);
  }

  logout() {
    const { history } = this.props;
    localStorage.removeItem('appKey');
    sessionStorage.clear();
    history.push('/');
  }

  async parentFunc(name) {
    await this.setState({ recieverName: name, clicked: true });
  }


  render() {
    if (!Utils.isAuthorized()) {
      return <Redirect to="/" />;
    }

    const { formID, recieverName, clicked } = this.state;
    return (
      <div className="container">
        <header className="App-header">
          <h1>{localStorage.getItem('name')}</h1>
          <button onClick={this.logout} className="logoutButton" type="button">Log Out</button>
          <Forms setFormID={this.setFormID} />
        </header>
        <div className="topDiv">
          <UserInfo />
          <div className="topRight" />
        </div>
        {
          formID ? (
            <div className="middleDiv">
              <div className="middleLeftDiv">
                <ContactList ID={formID} parentCallback={this.parentFunc} />
              </div>
              {
                clicked ? (<MessageList recieverName={recieverName} formID={formID} />) : null
              }
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default App;
