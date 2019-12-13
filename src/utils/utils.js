const Utils = {

  isAuthorized() {
    if (!window.localStorage.getItem('appKey')) {
      return false;
    }
    return true;
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
