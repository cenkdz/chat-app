import React from 'react';
import './App.css';


//Possible component imports
import UserInfo from './components/UserInfo/UserInfo';
import ContactList from './components/ContactList/ContactList';
import MessageList from './components/MessageList/MessageList';
import MessageBox from './components/MessageBox/MessageBox';
import FormInfo from './components/FormInfo/FormInfo';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container">
      <header classname= "App-header">
      <FormInfo/>
      </header>
      <div className="topDiv">
      <UserInfo/>
      <div className="topRight">
        <ContactList/>
      </div>
      </div>
      <div className="middleDiv">
        <div className="middleLeftDiv">
        <ContactList/>
      </div>
      <div className="middleRightDiv"></div>
      <div className="newMessageDiv">
      <MessageBox/>
      </div>
      </div>
      </div>
  );
}

export default App;
