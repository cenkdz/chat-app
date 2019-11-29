import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import shortid from '../../libs/shortid';


// shortid
// time+?
const Message = (props) => (
  <div className="middleRightDiv">
    {props.messages.map((message) => (
      <div className="userMessage" id={uuid()} key={uuid()}>
        <p>{message.message}</p>
        <span>{message.time}</span>
      </div>
    ))}
  </div>
);

Message.defaultProps = {
  messages: {
    message: 'New Message',
    time: '00:00',
  },
};

Message.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default Message;
