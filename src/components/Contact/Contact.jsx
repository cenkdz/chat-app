import React from 'react';
import avatar from './cavatar.png';


function Contact(props) {
  console.log('contact rendered!!');

  const { contact } = props;


  function onClick() {
    props.parentCallback(contact.substr(0, contact.indexOf('@')));
  }
  return (
    <div>
      <div onClick={onClick} className="contactInfo">
        <img src={avatar} alt="" height="50" width="50" />
        <span className="recieverName">{contact}</span>
      </div>
    </div>
  );
}

export default Contact;
