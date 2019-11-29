import React from 'react';
import './cavatar.png';

const Contact = (props) => (
  <div>
    <div className="contactInfo">
      <img src={require('./cavatar.png')} alt="" height="50" width="50" />
      <span className="contactName">Steve</span>
      <span className="lastMessage">10:30</span>
    </div>
    <div className="contactInfo">
      <img src={require('./cavatar.png')} alt="" height="50" width="50" />
      <span className="contactName">Sam</span>
      <span className="lastMessage">09:30</span>
    </div>
    <div className="contactInfo">
      <img src={require('./cavatar.png')} alt="" height="50" width="50" />
      <span className="contactName">Adam</span>
      <span className="lastMessage">08:30</span>
    </div>
    <div className="contactInfo">
      <img src={require('./cavatar.png')} alt="" height="50" width="50" />
      <span className="contactName">Michael</span>
      <span className="lastMessage">07:30</span>
    </div>
  </div>
);

export default Contact;
