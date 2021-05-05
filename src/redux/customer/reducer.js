import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS, 
    GET_LOGIN_FAILURE
} from './constants.js';

const initialState = {
    customer: {},
    loading: false
};

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                customer: action.payload
            }
        case GET_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                customer: action.payload
            }
        default: return state
    }
}