import React from 'react';
import './cavatar.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { formID } = this.props;
    return (
      <div>
        <div className="contactInfo">
          <img src={require('./cavatar.png')} alt="" height="50" width="50" />
          <span className="contactName">Michael</span>
          <span className="lastMessage">07:30</span>
        </div>
      </div>
    );
  }
}

export default Contact;
