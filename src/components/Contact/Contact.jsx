/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import avatar from './cavatar.png';


function Contact(props) {
  const { contact } = props;

  function onClick() {
    props.parentCallback(contact.substr(0, contact.indexOf('@')));
  }
  return (
    <div onClick={onClick} className="contactInfo">

      <img src={avatar} alt="" height="50" width="50" />
      <span className="recieverName">{contact}</span>

    </div>
  );
}

export default Contact;
