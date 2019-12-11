import React from 'react';
import './cavatar.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="contactInfo">
          <img src={require('./cavatar.png')} alt="" height="50" width="50" />
          <span className="contactName">{this.props.contact}</span>
        </div>
      </div>
    );
  }
}

export default Contact;
