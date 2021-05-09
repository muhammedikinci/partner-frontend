import { get } from '../../helper/request';

import { 
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE
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