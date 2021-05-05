import { 
    FETCH_GET_ALL_ORDER_REQUEST,
    FETCH_GET_ALL_ORDER_SUCCESS, 
    FETCH_GET_ALL_ORDER_FAILURE
} from './constants.js';

const initialState = {
    orders: [],
    loading: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GET_ALL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case FETCH_GET_ALL_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        default: return state
    }
}