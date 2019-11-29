import React from 'react';
import Request from './apiRequests';
import Requests from './apiRequests';

class Login extends React.Component {
  constructor({ props }) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: null,
      password: null,
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  login() {
    const bodyFormData = new FormData();

    bodyFormData.set('username', this.state.username);

    bodyFormData.set('password', this.state.password);


    Requests.login(bodyFormData);
  }

  render() {
    return (
      <div className="loginDiv">
        <input
          type="text"
          name="username"
          placeholder="Enter username here..."
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password here..."
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type="button" value="LOGIN" onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}

export default Login;
