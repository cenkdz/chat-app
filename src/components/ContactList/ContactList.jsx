import React from 'react';
import Requests from '../../apiRequests';
import Contact from '../Contact/Contact';
import shortid from '../../libs/shortid';
import Loader from '../../Loader';
import Utils from '../../utils/utils';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { ID } = this.props;
    console.log('CONTACTLIST COMPONENT MOUNTED');
    this.getNamesFromSubmissions(ID);
    await (Utils.wait(1000));
    this.setState({
      loading: false,
    });
  }


  async componentWillReceiveProps(nextProps) {
    const { ID } = this.props;
    if (nextProps.ID !== ID) {
      this.setState({
        loading: true,
      });
      this.getNamesFromSubmissions(nextProps.ID);
      await (Utils.wait(2000));
      this.setState({
        loading: false,
      });
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
    console.log('contact rendered!!');

    return this.state.contacts.map((contact) => (
      <Contact
        key={shortid.generate()}
        contact={contact}
        parentCallback={this.props.parentCallback}
      />
    ));
  }

  render() {
    const { contacts } = this.state;
    if (this.state.loading) return <Loader />;

    if (contacts.length > 0) return this.renderContacts();

    if (contacts.length === 0) return <div className="noContact">No contacts were found in this form!</div>;
  }
}

export default ContactList;
