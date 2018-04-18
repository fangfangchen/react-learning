export const GET_MENU_LIST_REQUEST = 'GET_MENU_LIST_REQUEST';
export const GET_MENU_LIST_SUCCESS = 'GET_MENU_LIST_SUCCESS';
export const GET_MENU_LIST_FAILURE = 'GET_MENU_LIST_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const MINUS_FROM_CART = 'MINUS_FROM_CART';

export const ORDER_DINNER_REQUEST = 'ORDER_DINNER_REQUEST';
export const ORDER_DINNER_SUCCESS = 'ORDER_DINNER_SUCCESS';
export const ORDER_DINNER_FAILURE = 'ORDER_DINNER_FAILURE';


export const CANCEL_DINNER_REQUEST = 'CANCEL_DINNER_REQUEST';
export const CANCEL_DINNER_SUCCESS = 'CANCEL_DINNER_SUCCESS';
export const CANCEL_DINNER_FAILURE = 'CANCEL_DINNER_FAILURE';

export const getMenuList = () => ({ type: GET_MENU_LIST_REQUEST });

export const getMenuListSuccess = (lists) => ({ type: GET_MENU_LIST_SUCCESS, lists });

export const getMenuListFailure = (error) => ({ type: GET_MENU_LIST_FAILURE, error });

export const add = (id) => ({ type: ADD_TO_CART, id });

export const minus = (id) => ({ type: MINUS_FROM_CART, id });

export const order = () => ({ type: ORDER_DINNER_REQUEST });

export const orderSuccess = (data) => ({ type: ORDER_DINNER_SUCCESS, data });

export const orderFailure = (data) => ({ type: ORDER_DINNER_FAILURE, data });

export const cancel = () => ({ type: CANCEL_DINNER_REQUEST });

export const cancelSuccess = () => ({ type: CANCEL_DINNER_SUCCESS });

export const cancelFailure = () => ({ type: CANCEL_DINNER_FAILURE });
