/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Avatar from 'react-avatar';

function Contact(props) {
  const { contact } = props;

  function onClick() {
    props.parentCallback(contact.substr(0, contact.indexOf('@')));
  }
  return (
    <div onClick={onClick} className="contactInfo">
      <Avatar name={contact} size="50" round />
      <span className="recieverName">{contact}</span>

    </div>
  );
}

export default Contact;
