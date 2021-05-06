import { post, get } from '../../helper/request';
import { setToken } from "../../helper/token";
import { setRole } from "../../helper/role";
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
} from './constants.js';

export const getLoginRequest = () => {
    return {
        type: GET_LOGIN_REQUEST
    }
}

export const getLoginSuccess = payload => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload
    }
}

export const getLoginFailure = payload => {
    return {
        type: GET_LOGIN_FAILURE,
        payload
    }
}

export const login = (customer) => {
    return dispatch => {
        dispatch(getLoginRequest());
        post('/auth/authenticate', customer).then(res => {
            const customer = res.data;

            if (customer.token) {
                setToken(customer.token);
                setRole(customer.role);
            }

            dispatch(getLoginSuccess(customer));
        }).catch(err => {
            dispatch(getLoginFailure(err));
        });
    }
}

export const setNewPartnerRequest = () => {
    return {
        type: SET_NEW_PARTNER_REQUEST
    }
}

export const setNewPartnerSuccess = payload => {
    return {
        type: SET_NEW_PARTNER_SUCCESS,
        payload
    }
}

export const setNewPartnerFailure = payload => {
    return {
        type: SET_NEW_PARTNER_FAILURE,
        payload
    }
}

export const setNewPartner = (partner) => {
    return dispatch => {
        dispatch(setNewPartnerRequest());
        post('/api/user/create-partner', partner).then(res => {
            const result = res.data;
            dispatch(setNewPartnerSuccess(result));
        }).catch(err => {
            dispatch(setNewPartnerFailure(err));
        });
    }
}

export const getAllPartnersRequest = () => {
    return {
        type: GET_ALL_PARTNERS_REQUEST
    }
}

export const getAllPartnersSuccess = payload => {
    return {
        type: GET_ALL_PARTNERS_SUCCESS,
        payload
    }
}

export const getAllPartnersFailure = payload => {
    return {
        type: GET_ALL_PARTNERS_FAILURE,
        payload
    }
}

export const getAllPartners = () => {
    return dispatch => {
        dispatch(getAllPartnersRequest());
        get('/api/user').then(res => {
            const result = res.data;
            dispatch(getAllPartnersSuccess(result));
        }).catch(err => {
            dispatch(getAllPartnersFailure(err));
        });
    }
}