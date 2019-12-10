import axios from 'axios';

const apiKEY = 'b458214c4277a0b8fd282d09f3a73480';


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
          'appName': 'ChatApp',
        },
      },
    })
      .then((response) => {
        console.log(response);
        data.push(response);
      })
      .catch((response) => { data.push(response); });

    return data[0];
  },


  async getForms() {
    const data = [];
    await axios.get(`https://api.jotform.com/user/forms?apikey=${apiKEY}&orderby=id`)
      .then((response) => {
        console.log(response);
        data.push(response);
      })
      .catch((error) => {
        console.log(error);
        data.push(error);
      });

    return data;
  },

  async getFormSubmissions(formID) {
    const data = [];
    await axios.get(`https://api.jotform.com/form/${formID}/submissions?apikey=${apiKEY}`)
      .then((response) => {
        console.log('THIS IS THE FRICKING REPSONSE');
        console.log(response);
        data.push(response);
      })
      .catch((error) => {
        console.log(error);
        data.push(error);
      });

    return data[0];
  },

};


export default Requests;
