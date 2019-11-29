import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Link, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import Forms from './forms';
import Form from './Form';
import * as serviceWorker from './serviceWorker';
import Notfound from './notfound';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/forms" component={Forms} />
        <Route path="/forms/:formid" component={Form} />
        <Route path="/login" component={Login} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
