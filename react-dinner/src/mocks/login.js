import Mock from 'mockjs';

Mock.mock(/\/login/, 'post', {
  code: 0,
  message: 'success',
  data: []
});
