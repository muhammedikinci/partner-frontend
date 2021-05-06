import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS, 
    GET_LOGIN_FAILURE,
    SET_NEW_PARTNER_REQUEST,
    SET_NEW_PARTNER_SUCCESS, 
    SET_NEW_PARTNER_FAILURE,
    GET_ALL_PARTNERS_REQUEST,
    GET_ALL_PARTNERS_SUCCESS, 
    GET_ALL_PARTNERS_FAILURE
} from './constants.js';

const initialState = {
    customer: {},
    newPartnerResult: false,
    partners: [],
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
        case SET_NEW_PARTNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_NEW_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                newPartnerResult: action.payload
            }
        case SET_NEW_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
                newPartnerResult: action.payload
            }
        case GET_ALL_PARTNERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PARTNERS_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: action.payload
            }
        case GET_ALL_PARTNERS_FAILURE:
            return {
                ...state,
                loading: false,
                partners: action.payload
            }
        default: return state
    }
}