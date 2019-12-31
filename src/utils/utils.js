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

  sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },

  async wait(milliseconds = 2000) {
    await this.sleep(milliseconds);
  },
};

export default Utils;
