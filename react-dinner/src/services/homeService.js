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
  },
  orderDinner(data) {
    if (!data) {
      return { code: 40001, message: '请选择菜单' };
    }
    return fetch('/order', { method: 'POST', body: JSON.stringify(data) })
      .then(response => response.json())
      .then(json => {
        if (json && json.code === 0) {
          console.log(json);
          return json;
        }
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
};
