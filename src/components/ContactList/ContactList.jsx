import React from 'react';
import Requests from '../../apiRequests';
import Contact from '../Contact/Contact';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      ID: [],
    };
    if (props.forms.location.state !== undefined) {
      this.state.ID = props.forms.location.state.formID;
    }
  }

  componentDidMount() {
    this.getNamesFromSubmissions();
  }

  async getContacts() {
    const submissionData = await Requests.getFormSubmissions(this.state.ID);
    if (submissionData !== false) {
      return submissionData.data.content;
    }
  }

  async getNamesFromSubmissions() {
    let emails = [];

    const submissionData = await this.getContacts();

    if (submissionData !== undefined) {
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
    }
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => (
          <Contact contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
