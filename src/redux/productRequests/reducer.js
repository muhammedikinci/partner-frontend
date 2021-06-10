import {
    RESET_STATE,
    GET_ALL_MY_REQUESTS_REQUEST,
    GET_ALL_MY_REQUESTS_SUCCESS,
    GET_ALL_MY_REQUESTS_FAILURE,
    SET_NEW_PRODUCT_REQUEST_REQUEST,
    SET_NEW_PRODUCT_REQUEST_SUCCESS,
    SET_NEW_PRODUCT_REQUEST_FAILURE,
    GET_PRODUCT_REQUEST_REQUEST,
    GET_PRODUCT_REQUEST_SUCCESS,
    GET_PRODUCT_REQUEST_FAILURE,
    EDIT_PRODUCT_REQUEST_REQUEST,
    EDIT_PRODUCT_REQUEST_SUCCESS,
    EDIT_PRODUCT_REQUEST_FAILURE,
    GET_ALL_REQUESTS_REQUEST,
    GET_ALL_REQUESTS_SUCCESS,
    GET_ALL_REQUESTS_FAILURE,
} from './constants.js';

const initialState = {
    requests: null,
    my_requests: [],
    request: {},
    loading: false,
    newProductRequestResult: null,
    editProductRequestResult: null,
    errorMessage: null
};

export const productRequestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return {
                requests: null,
                my_requests: [],
                request: {},
                loading: false,
                newProductRequestResult: null,
                editProductRequestResult: null,
                errorMessage: null
            }
        case GET_ALL_MY_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_MY_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                my_requests: action.payload
            }
        case GET_ALL_MY_REQUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case SET_NEW_PRODUCT_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_NEW_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                newProductRequestResult: action.payload
            }
        case SET_NEW_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case GET_PRODUCT_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                request: action.payload
            }
        case GET_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case EDIT_PRODUCT_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                editProductRequestResult: action.payload
            }
        case EDIT_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case GET_ALL_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                requests: action.payload
            }
        case GET_ALL_REQUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default: return state
    }
}