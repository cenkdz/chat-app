import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utils/utils';
import Requests from '../../apiRequests';
import Form from '../Form/Form';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
    };
  }

  componentDidMount() {
    Utils.isAuthorized();

    this.setForms();
  }

  async setForms() {
    const formData = await Requests.getForms();

    this.setState({
      forms: [...formData[0].data.content],
    });
  }

  render() {
    return (


      <div>
        <h1>Forms</h1>
        <strong>Select a Form</strong>
        <ul>
          {this.state.forms.map((form) => (
            <div>
              <li>
                <Link to={`/forms/${form.id}`}>{form.title}</Link>
              </li>
            </div>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
} export default Forms;
