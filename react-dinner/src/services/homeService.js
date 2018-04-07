class homeService {
  getMenuList = (username, password) => {
    fetch('/home')
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
}

export default new homeService();
