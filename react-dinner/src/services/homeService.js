class homeService {
  getMenuList = (username, password) => {
    fetch(`${window.location.origin}${data/menuLists.json}`)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
}

export default new homeService();
