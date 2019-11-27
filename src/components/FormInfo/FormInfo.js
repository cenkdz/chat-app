import React from "react";

const Header = () => {
  return (
    <div class="navbar">
      <div class="dropdown">
        <div className="formInfo">
          <button>
            <h1>Customer Satisfaction Survey Form</h1>
          </button>
        </div>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
