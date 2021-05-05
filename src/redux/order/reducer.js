import { 
    GET_ALL_ORDER_REQUEST,
    GET_ALL_ORDER_SUCCESS, 
    GET_ALL_ORDER_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAILURE
} from './constants.js';

const initialState = {
    orders: [],
    loading: false,
    selectedOrder: {}
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case GET_ALL_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case GET_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedOrder: action.payload
            }
        case GET_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                selectedOrder: action.payload
            }
        default: return state
    }
}