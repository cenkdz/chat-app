import axios from 'axios';


const Requests = {


  login(bodyFormData) {
    axios({
      method: 'post',
      url: 'http://api.jotform.com//user/login',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((response) => {
        // handle error
        console.log(response);
      });
  },

};


export default Requests;
