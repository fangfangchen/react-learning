import Mock from 'mockjs';

Mock.mock(/\/menus/, 'get', {
  code: 0,
  message: 'success',
  data: [
    {
      id: 1,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520512480874&di=85bc4094aafd2ae2b42f47199f7b1694&imgtype=0&src=http%3A%2F%2Fpic.92to.com%2F360%2F201604%2F06%2F45456100_5.jpg',
      name: '宫保鸡丁',
      reserve: 1,
      price: 12
    },
    {
      id: 2,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520512480874&di=85bc4094aafd2ae2b42f47199f7b1694&imgtype=0&src=http%3A%2F%2Fpic.92to.com%2F360%2F201604%2F06%2F45456100_5.jpg',
      name: '沙茶牛肉',
      reserve: 1,
      price: 12
    },
    {
      id: 3,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520512480874&di=85bc4094aafd2ae2b42f47199f7b1694&imgtype=0&src=http%3A%2F%2Fpic.92to.com%2F360%2F201604%2F06%2F45456100_5.jpg',
      name: '咖喱鸡块',
      reserve: 1,
      price: 12
    },
    {
      id: 4,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520512480874&di=85bc4094aafd2ae2b42f47199f7b1694&imgtype=0&src=http%3A%2F%2Fpic.92to.com%2F360%2F201604%2F06%2F45456100_5.jpg',
      name: '宫保鸡丁',
      reserve: 1,
      price: 12
    },
    {
      id: 5,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520512480874&di=85bc4094aafd2ae2b42f47199f7b1694&imgtype=0&src=http%3A%2F%2Fpic.92to.com%2F360%2F201604%2F06%2F45456100_5.jpg',
      name: '宫保鸡丁',
      reserve: 1,
      price: 12
    }
  ]
});


Mock.mock(/\/order-list/, 'get', {
  code: 0,
  message: 'success',
  data: [
    {
      id: 1,
      number: 1
    },
    {
      id: 2,
      number: 2
    }
  ]
});

Mock.mock(/\/order/, 'post', {
  code: 0,
  message: '预定晚餐成功~',
  data: []
});
