import React from 'react';
import Requests from '../../apiRequests';
import Contact from '../Contact/Contact';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formID: this.props.formID,
      contacts: [],
    };
  }

  componentDidMount() {
    this.getNamesFromSubmissions();
  }

  async getContacts() {
    const submissionData = await Requests.getFormSubmissions(this.props.formID);
    return submissionData.data.content;
  }

  async getNamesFromSubmissions() {
    let emails = [];

    const submissionData = await this.getContacts();

    submissionData.forEach((submission) => {
      const fields = submission.answers;
      const values = Object.values(fields);
      values.forEach((value) => {
        if (String(value.answer).match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) && value.answer !== undefined) {
          emails.push(value.answer);
        }
      });
    });
    // Removing duplicates
    emails = [...new Set(emails)];

    emails.forEach((email) => {
      this.setState({
        contacts: [...this.state.contacts,
          email,
        ],
      });
    });

    console.log('AFTER STATE', this.state);
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact, index) => (
          <Contact contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
