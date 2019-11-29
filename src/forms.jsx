import React from 'react';
import { Route, Link } from 'react-router-dom';

class Forms extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h1>Forms</h1>
        <strong>select a Form</strong>
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
