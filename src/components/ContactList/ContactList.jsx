import React from 'react';
import Requests from '../../apiRequests';
import Contact from '../Contact/Contact';
import shortid from '../../libs/shortid';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  async componentDidMount() {
    console.log('CONTACTLIST COMPONENT MOUNTED');
    await this.getNamesFromSubmissions(this.props.ID);
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.ID !== this.props.ID) {
      await this.getNamesFromSubmissions(nextProps.ID);
    }
  }

  async getContacts(formID) {
    const submissionData = await Requests.getFormSubmissions(formID);
    console.log('SUBMISSION DATA', submissionData);
    if (submissionData !== false) {
      return submissionData.data.content;
    }
  }

  async getNamesFromSubmissions(formID) {
    let emails = [];

    const submissionData = await this.getContacts(formID) || [];
    submissionData.forEach((submission) => {
      const fields = submission.answers;
      const values = Object.values(fields);
      values.forEach((value) => {
        if (String(value.answer).match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
        && value.answer !== undefined) {
          emails.push(value.answer);
        }
      });
    });
    // Removing duplicates
    emails = [...new Set(emails)];

    await this.setState({
      contacts: [...emails],
    });
  }

  renderContacts() {
    return this.state.contacts.map((contact) => (
      <Contact
        key={shortid.generate()}
        contact={contact}
        parentCallback={this.props.parentCallback}
      />
    ));
  }

  render() {
    return (
      <div>
        {this.renderContacts()}
      </div>
    );
  }
}

export default ContactList;
