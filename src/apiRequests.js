import axios from 'axios';
import Utils from './utils/utils';

function getAppKey() {
  const appKey = localStorage.getItem('appKey');

  if (appKey) {
    return appKey;
  }

  return false;
}

const Requests = {

  async login(bodyFormData) {
    const data = [];

    await axios({
      method: 'post',
      url: 'https://api.jotform.com//user/login',
      data: bodyFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
        },
      },
    })
      .then((response) => {
        if (Utils.validateResponse(response) !== false) {
          data.push(response);
          localStorage.setItem('appKey', response.data.content.appKey);
          console.log('asdjhbasdkjhasbdjkhasbduhsad');
        }
      })
      .catch((response) => { });

    return data[0];
  },


  async getForms() {
    if (getAppKey()) {
      const data = [];
      await axios.get(`https://api.jotform.com/user/forms?apikey=${getAppKey()}&orderby=id`)
        .then((response) => {
          console.log(response);
          data.push(response);
        })
        .catch((error) => {
          console.log(error);
          data.push(error);
        });

      return data;
    }
  },

  async getFormSubmissions(formID) {
    if (getAppKey()) {
      const data = [];
      await axios.get(`https://api.jotform.com/form/${formID}/submissions?apikey=${getAppKey()}`)
        .then((response) => {
          console.log('SUBMISSION RESPONSE', response);
          data.push(response);
        })
        .catch((error) => {
          console.log(error);
          data.push(error);
        });

      return data[0];
    }
  },

};


export default Requests;
