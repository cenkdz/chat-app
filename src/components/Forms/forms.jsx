import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utils/utils';
import Requests from '../../apiRequests';
import shortid from '../../libs/shortid';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      title: 'Please select a form',
    };
  }

  componentDidMount() {
    Utils.isAuthorized();
    this.setForms();
  }

  async setForms() {
    const formData = await Requests.getForms();

    if (formData !== false) {
      if (formData[0].data.content !== undefined) {
        this.setState({
          forms: [...formData[0].data.content],
        });
      }
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <div className="formInfo">
            <button type="button">
              <h1>{this.state.title}</h1>
            </button>
          </div>
          <div className="dropdown-content">
            {this.state.forms.map((form) => (
              <div key={shortid.generate()}>
                <Link
                  to={{
                    pathname: '/home',
                    state: {
                      formID: form.id,
                      formTitle: form.title,
                    },
                  }}
                >
                  {form.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
} export default Forms;
