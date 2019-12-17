const Utils = {

  isAuthorized() {
    return window.localStorage.getItem('appKey');
  },

  validateResponse(response) {
    const contentType = response.headers['content-type'];
    const { content } = response.data;

    if (contentType && contentType.indexOf('application/json') !== -1) {
      if (response.data.responseCode === 200) {
        if (content !== []) {
          return true;
        }
      }
    }

    return false;
  },


};


export default Utils;
