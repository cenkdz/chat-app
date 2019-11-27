import React from "react";

const Message = props => {
  return (
    <div className="middleRightDiv">
      {props.message.map((message, index) => (
        <div className="userMessage" key={index}>
          <p>{message.message}</p>
          <span>{message.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Message;
