import axios from 'axios';


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

};


export default Requests;
