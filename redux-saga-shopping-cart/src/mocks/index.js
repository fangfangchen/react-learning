import Mock from 'mockjs';

Mock.mock(/\/products/, 'get', {
  code: 0,
  message: 'success',
  data: [
	  {
	  	id: 1,
	  	title: 'iPad 4 Mini',
	  	price: 500.01,
	  	inventory: 2
	  },
	  {
	  	id: 2,
	  	title: 'H&M T-Shirt White',
	  	price: 10.99,
	  	inventory: 10
	  },
	  {
	  	id: 3,
	  	title: 'Charli XCX - Sucker CD',
	  	price: 19.99,
	  	inventory: 5
	  },
	]
});

Mock.mock(/\/buy/, 'post', {
	code: 0,
	message: 'success',
	data: []
});
