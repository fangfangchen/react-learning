export const GET_MENU_LIST_REQUEST = 'GET_MENU_LIST_REQUEST';
export const GET_MENU_LIST_SUCCESS = 'GET_MENU_LIST_SUCCESS';
export const GET_MENU_LIST_FAILURE = 'GET_MENU_LIST_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const MINUS_FROM_CART = 'MINUS_FROM_CART';

export const ORDER_DINNER = 'ORDER_DINNER';
export const CANCEL_DINNER = 'CANCEL_DINNER';

export const getMenuList = () => ({ type: GET_MENU_LIST_REQUEST });

export const getMenuListSuccess = (lists) => ({ type: GET_MENU_LIST_SUCCESS, lists });

export const getMenuListFailure = (error) => ({ type: GET_MENU_LIST_FAILURE, error });

export const add = (id) => ({ type: ADD_TO_CART, id });

export const minus = (id) => ({ type: MINUS_FROM_CART, id });

export const order = () => ({ type: ORDER_DINNER });

export const cancel = () => ({ type: CANCEL_DINNER });
