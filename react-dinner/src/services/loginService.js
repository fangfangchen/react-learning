const USERNAME = 'admin';
const PASSWORD = 'a123456';

export const loginService = {
  userLogin(username, password) {
    return new Promise((resolve, reject) => {
      if (username === USERNAME && password === PASSWORD) {
        resolve(1); // '登录成功'
      } else {
        reject(0); // '登录失败'
      }
    });
  }
};
