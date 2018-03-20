class loginService {
  userLogin = (username, password) => {
    console.log('-login service-------');
    console.log(username, password);
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === '123456') {
        resolve({
          code: 0,
          message: 'login success'
        });
      } else {
        reject({
          code: 1,
          message: 'login faild'
        });
      }
    });
  }
}

export default new loginService();
