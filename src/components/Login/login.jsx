import React from 'react';
import Requests from '../../apiRequests';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async login() {
    const { username, password } = this.state;
    const { history } = this.props;

    const bodyFormData = new FormData();

    bodyFormData.append('username', username);

    bodyFormData.append('password', password);

    bodyFormData.append('appName', 'ChatApp');

    const response = await Requests.login(bodyFormData);

    if (response !== undefined) {
      history.push('/home/');
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="loginDiv">
        <input
          type="text"
          name="username"
          placeholder="Enter username here..."
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password here..."
          value={password}
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}

export default Login;
