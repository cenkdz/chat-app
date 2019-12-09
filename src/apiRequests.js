import axios from 'axios';

const apiKEY = '8121104cddfc11a71346739e70484310';


const Requests = {


  async login(bodyFormData) {
    const data = [];
    await axios({
      method: 'post',
      url: 'http://api.jotform.com//user/login',
      data: bodyFormData,
    })
      .then((response) => {
        data.push(response);
      })
      .catch((response) => { data.push(response); });

    return data[0];
  },


  async getForms() {
    const data = [];
    await axios.get(`https://api.jotform.com/user/forms?apikey=${apiKEY}&orderby=id`)
      .then((response) => {
        // handle success
        console.log(response);
        data.push(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        data.push(error);
      });

    return data;
  },

};


export default Requests;
