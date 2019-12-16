import React from 'react';
import avatar from './cavatar.png';


function Contact(props) {
  return (
    <div>
      <div className="contactInfo">
        <img src={avatar} alt="" height="50" width="50" />
        <span className="contactName">{props.contact}</span>
      </div>
    </div>
  );
}

export default Contact;
