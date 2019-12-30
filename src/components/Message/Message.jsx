import React from 'react';
import PropTypes from 'prop-types';
import shortid from '../../libs/shortid';

function Message(props) {
  let arr = [];

  props.messages.forEach((element) => {
    arr = [...element];
  });

  console.log(props);

  return (
    <div className="middleRightDiv">
      <div className="userMessage">
        {arr.map((message) => (
          <div key={shortid.generate()}>
            <h5>{message.sender}</h5>
            <p>{message.message}</p>
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
