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

const initialState = {
    products: [],
    my_products: [],
    product: {},
    loading: false,
    stockRequestResult: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return {
                products: [],
                my_products: [],
                product: {},
                loading: false,
                stockRequestResult: null,
            }
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_MY_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MY_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                my_products: action.payload
            }
        case GET_MY_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                my_products: action.payload
            }
        case SET_STOCK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_STOCK_SUCCESS:
            return {
                ...state,
                loading: false,
                stockRequestResult: action.payload
            }
        case SET_STOCK_FAILURE:
            return {
                ...state,
                loading: false,
                stockRequestResult: action.payload
            }
        default: return state
    }
}