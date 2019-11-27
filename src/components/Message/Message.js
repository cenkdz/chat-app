import React from "react";

const Message = props => {
  return (
    <div className="middleRightDiv">
      {Array.from(props.message).map(message => (
        <div className="userMessage">
          <p>{message.message}</p>
          <span>{message.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Message;
