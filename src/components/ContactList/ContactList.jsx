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

    this.getContacts = this.getContacts.bind(this);
  }

  async componentDidMount() {
    const { ID } = this.props;
    this.getNamesFromSubmissions(ID);
    await (Utils.wait(1000));
    this.setState({
      loading: false,
    });
  }


  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillReceiveProps(nextProps) {
    const { ID } = this.props;
    if (nextProps.ID !== ID) {
      this.setState({
        loading: true,
      });
      this.getNamesFromSubmissions(nextProps.ID);
      await (Utils.wait(1000));
      this.setState({
        loading: false,
      });
    }
  }

  async getContacts(formID) {
    const submissionData = await Requests.getFormSubmissions(formID);

    if (submissionData !== false) {
      return submissionData.data.content;
    }

    return [];
  }

  async getNamesFromSubmissions(formID) {
    let emails = [];

    const submissionData = await this.getContacts(formID);
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
    const { contacts } = this.state;
    const { parentCallback } = this.props;

    return contacts.map((contact) => (
      <Contact
        key={shortid.generate()}
        contact={contact}
        parentCallback={parentCallback}
      />
    ));
  }

  render() {
    const { contacts, loading } = this.state;

    if (loading) return <Loader />;

    if (contacts.length > 0) return this.renderContacts();

    if (contacts.length === 0) return <div className="noContact">No contacts were found in this form!</div>;

    return null;
  }
}

export default ContactList;
