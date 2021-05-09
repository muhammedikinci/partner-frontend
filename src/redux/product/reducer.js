import { 
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE
} from './constants.js';

const initialState = {
    products: [],
    product: {},
    loading: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default: return state
    }
}