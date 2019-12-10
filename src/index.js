import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login/login';
import Forms from './components/Forms/forms';
import Form from './components/Form/Form';
import * as serviceWorker from './serviceWorker';
import Notfound from './notfound';

const routing = (
  <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul> */}
      <hr />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forms" component={Forms} />
        <Route path="/forms/:formid" component={App} />
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
