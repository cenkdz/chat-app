import React from 'react';
import { Link } from 'react-router-dom';
import Requests from '../../apiRequests';

class Login extends React.Component {
  constructor({ props }) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    // Utils.isAuthorized();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async login() {
    const bodyFormData = new FormData();

    bodyFormData.append('username', this.state.username);

    bodyFormData.append('password', this.state.password);

    bodyFormData.append('appName', 'ChatApp');

    const response = await Requests.login(bodyFormData);
    console.log('Login response: ', response);

    console.log(response);

    window.location.href = '/home';
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

        <button type="button" onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}

export default Login;