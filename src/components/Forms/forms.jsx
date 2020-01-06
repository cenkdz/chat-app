/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
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
    const { title, forms } = this.state;
    const { setFormID } = this.props;

    return (
      <div className="navbar">
        <div className="dropdown">
          <div className="formInfo">
            <button type="button">
              <h1>{title}</h1>
            </button>
          </div>
          <div className="dropdown-content">
            {forms.map((form) => (
              <div onClick={() => setFormID(form.id)} key={shortid.generate()}>
                {form.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
} export default Forms;
