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
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return data[0];
  },


  async getForms() {
    if (getAppKey()) {
      const data = [];
      await axios.get(`https://api.jotform.com/user/forms?apikey=${getAppKey()}&orderby=id`)
        .then((response) => {
          data.push(response);
        })
        .catch((error) => {
          console.log(error);
        });

      return data;
    }
    return false;
  },

  async getFormSubmissions(formID) {
    if (getAppKey()) {
      const data = [];
      await axios.get(`https://api.jotform.com/form/${formID}/submissions?apikey=${getAppKey()}`)
        .then((response) => {
          data.push(response);
        })
        .catch((error) => {
          console.log(error);
        });

      return data[0];
    }

    return false;
  },

};


export default Requests;
