import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS, 
    GET_LOGIN_FAILURE,
    SET_NEW_PARTNER_REQUEST,
    SET_NEW_PARTNER_SUCCESS, 
    SET_NEW_PARTNER_FAILURE,
    GET_ALL_PARTNERS_REQUEST,
    GET_ALL_PARTNERS_SUCCESS,
    GET_ALL_PARTNERS_FAILURE,
    DELETE_PARTNER_REQUEST,
    DELETE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAILURE,
    RESET_STATE,
    GET_PARTNER_REQUEST,
    GET_PARTNER_SUCCESS,
    GET_PARTNER_FAILURE,
    EDIT_PARTNER_REQUEST,
    EDIT_PARTNER_SUCCESS,
    EDIT_PARTNER_FAILURE,
    GET_MY_DATA_REQUEST,
    GET_MY_DATA_SUCCESS,
    GET_MY_DATA_FAILURE,
    UPDATE_MY_DATA_REQUEST,
    UPDATE_MY_DATA_SUCCESS,
    UPDATE_MY_DATA_FAILURE,
} from './constants.js';

const initialState = {
    customer: {},
    newPartnerResult: false,
    editPartnerResult: null,
    deleteResult: null,
    partners: [],
    partner: {},
    loading: false,
    errorMessage: null
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
                errorMessage: action.payload
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
                errorMessage: action.payload
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
                errorMessage: action.payload
            }
        case DELETE_PARTNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteResult: action.payload
            }
        case DELETE_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case RESET_STATE:
            return {
                ...state,
                loading: false,
                deleteResult: null,
                newPartnerResult: null,
                editPartnerResult: null,
                partner: {},
                customer: {},
                errorMessage: null
            }
        case GET_PARTNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partner: action.payload
            }
        case GET_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case EDIT_PARTNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                editPartnerResult: action.payload
            }
        case EDIT_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case GET_MY_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                partner: action.payload
            }
        case GET_MY_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case UPDATE_MY_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_MY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                editPartnerResult: action.payload
            }
        case UPDATE_MY_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default: return state
    }
}