import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utils/utils';

class Forms extends React.Component {
  componentDidMount() {
    Utils.isAuthorized();
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <strong>Select a Form</strong>
        <ul>
          <li>
            <Link to="/forms/1">Form 1 </Link>
          </li>
          <li>
            <Link to="/forms/2">Form 2 </Link>
          </li>
          <li>
            <Link to="/forms/3">Form 3 </Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
} export default Forms;
