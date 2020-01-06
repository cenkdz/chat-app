import React from 'react';
import moment from 'moment';
import shortid from '../../libs/shortid';

function Message(props) {
  let arr = [];

  const { messages } = props;

  messages.forEach((element) => {
    arr = [...element];
  });

  return (
    <div className="middleRightDiv">
      <div className="userMessage">
        {arr.map((message) => (
          <div key={shortid.generate()}>
            <h5>{message.sender}</h5>
            <p>{message.message}</p>
            <span>{moment(message.time).calendar()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;
