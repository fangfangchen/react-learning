export default (state = {}, action) => {
  switch(action.type) {
    case 'IS_LOGIN':
      return action.payload;
    default:
      return state;
  }
};
