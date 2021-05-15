import { get, put } from '../../helper/request';

import {
    RESET_STATE,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_MY_PRODUCTS_REQUEST,
    GET_MY_PRODUCTS_SUCCESS,
    GET_MY_PRODUCTS_FAILURE,
    SET_STOCK_REQUEST,
    SET_STOCK_SUCCESS,
    SET_STOCK_FAILURE
} from './constants.js';

export const getAllProductsRequest = () => {
    return {
        type: GET_ALL_PRODUCTS_REQUEST
    }
}

export const getAllProductsSuccess = payload => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload
    }
}

export const getAllProductsFailure = payload => {
    return {
        type: GET_ALL_PRODUCTS_FAILURE,
        payload
    }
}

export const getAllProducts = () => {
    return dispatch => {
        dispatch(getAllProductsRequest());
        get('/api/product').then(res => {
            const products = res.data;
            dispatch(getAllProductsSuccess(products));
        }).catch(err => {
            dispatch(getAllProductsFailure(err));
        });
    }
}

export const getProductRequest = () => {
    return {
        type: GET_PRODUCT_REQUEST
    }
}

export const getProductSuccess = payload => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload
    }
}

export const getProductFailure = payload => {
    return {
        type: GET_PRODUCT_FAILURE,
        payload
    }
}

export const getProduct = (id) => {
    return dispatch => {
        dispatch(getProductRequest());
        get('/api/product/' + id).then(res => {
            const result = res.data;
            dispatch(getProductSuccess(result));
        }).catch(err => {
            dispatch(getProductFailure(err));
        });
    }
}

export const getMyProductsRequest = () => {
    return {
        type: GET_MY_PRODUCTS_REQUEST
    }
}

export const getMyProductsSuccess = payload => {
    return {
        type: GET_MY_PRODUCTS_SUCCESS,
        payload
    }
}

export const getMyProductsFailure = payload => {
    return {
        type: GET_MY_PRODUCTS_FAILURE,
        payload
    }
}

export const getMyProducts = () => {
    return dispatch => {
        dispatch(getMyProductsRequest());
        get('/api/product/get-all-my-products').then(res => {
            const result = res.data;
            dispatch(getMyProductsSuccess(result));
        }).catch(err => {
            dispatch(getMyProductsFailure(err));
        });
    }
}

export const setStockRequest = () => {
    return {
        type: SET_STOCK_REQUEST
    }
}

export const setStockSuccess = payload => {
    return {
        type: SET_STOCK_SUCCESS,
        payload
    }
}

export const setStockFailure = payload => {
    return {
        type: SET_STOCK_FAILURE,
        payload
    }
}

export const setStock = (productId, stockNumber) => {
    return dispatch => {
        dispatch(setStockRequest());
        put('/api/product/set-stock/' + productId, { stock: stockNumber.toString() }).then(res => {
            const result = res.data;
            dispatch(setStockSuccess(result));
        }).catch(err => {
            dispatch(setStockFailure(err));
        });
    }
}

export const resetStateAction = () => {
    return {
        type: RESET_STATE
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch(resetStateAction());
    }
}