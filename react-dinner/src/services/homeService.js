window.fetch = null;
require('es6-promise');
require('isomorphic-fetch');

export const homeService = {
  getMenuList() {
    return fetch('/menus', { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        if (json.code === 0) {
          return json.data;
        }
      })
      .catch(error => console.log(error));
  }
};
