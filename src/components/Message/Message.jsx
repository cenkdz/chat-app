import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  console.log('THIS IS MESSAGE PROPS', props.messages);
  let arr = [];
  props.messages.forEach((element) => {
    arr = [...element];
  });

  return (
    <div className="middleRightDiv">
      <div className="userMessage">
        {arr.map((message, i) => (
          <div>
            <p key={i}>{message.message}</p>
            <span>{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
