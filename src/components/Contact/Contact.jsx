import React from 'react';
import './cavatar.png';
import Requests from '../../apiRequests';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formID: this.props.formID,
    };
  }

  componentDidMount() {
    this.getNamesFromSubmissions();
  }


  async getContacts() {
    const submissionData = await Requests.getFormSubmissions(this.state.formID);
    return submissionData.data.content;
  }

  async getNamesFromSubmissions() {
    const submissionData = await this.getContacts();

    submissionData.forEach((submission) => {
      const fields = submission.answers;
      const values = Object.values(fields);
      values.forEach((field) => {
        if (field.name !== undefined) {console.log(field.name);}
      });
    });

    console.log(submissionData);
  }


  render() {
    return (
      <div>
        <div className="contactInfo">
          <img src={require('./cavatar.png')} alt="" height="50" width="50" />
          <span className="contactName">CENK</span>
          <span className="lastMessage">10:30</span>
        </div>
        <div className="contactInfo">
          <img src={require('./cavatar.png')} alt="" height="50" width="50" />
          <span className="contactName">Sam</span>
          <span className="lastMessage">09:30</span>
        </div>
        <div className="contactInfo">
          <img src={require('./cavatar.png')} alt="" height="50" width="50" />
          <span className="contactName">Adam</span>
          <span className="lastMessage">08:30</span>
        </div>
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
