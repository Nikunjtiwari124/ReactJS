import * as CONST from '../constant';
export const updateEmail = (data) => ({
    type: CONST.EMAIL,
    payload: data,
});
export const updateUserName = (data) => ({
    type: CONST.USERNAME,
    payload: data,
});
export const updateId = (data) => ({
    type: CONST.ID,
    payload: data,
});

export const updateCartCount = (data) => ({
    type: CONST.CARTCOUNT,
    payload: data,
});

export const UpdateAllProduct = (data) => ({
    type: CONST.PRODUCT,
    payload: data,
});

export const updateCart = (data) => ({
    type: CONST.CART,
    payload: data,
});

export const updateCartAmount = (data) => ({
    type: CONST.CHECKOUTAMOUNT,
    payload: data,
});