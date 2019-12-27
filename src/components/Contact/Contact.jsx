import React from 'react';
import avatar from './cavatar.png';


function Contact(props) {
  console.log('contact rendered!!');
  function onClick() {
    let contact = String(props.contact);
    contact = (contact.substr(0, contact.indexOf('@')));
    props.parentCallback(contact);
  }

  return (
    <div>
      <div onClick={onClick} className="contactInfo">
        <img src={avatar} alt="" height="50" width="50" />
        <span className="contactName">{props.contact}</span>
      </div>
    </div>
  );
}

export default Contact;
