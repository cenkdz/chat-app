const Utils = {

  isAuthorized() {
    if (window.localStorage.getItem('email') === undefined || window.localStorage.getItem('email') === null) {
      window.location.href = '/';
      alert('You are not authorized');
      return false;
    }
    return true;
  },

};


export default Utils;
