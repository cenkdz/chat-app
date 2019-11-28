import React from 'react';

const Header = () => (
  <div className="navbar">
    <div className="dropdown">
      <div className="formInfo">
        <button>
          <h1>Customer Satisfaction Survey Form</h1>
        </button>
      </div>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </div>
);

export default Header;
