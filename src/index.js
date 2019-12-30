import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login/login';
import * as serviceWorker from './serviceWorker';
import Notfound from './components/NotFound/Notfound';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={App} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
