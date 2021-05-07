import { post, get, deleteReq, put } from '../../helper/request';
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
    DELETE_PARTNER_REQUEST,
    DELETE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAILURE,
    RESET_STATE,
    GET_PARTNER_REQUEST,
    GET_PARTNER_SUCCESS,
    GET_PARTNER_FAILURE,
    EDIT_PARTNER_REQUEST,
    EDIT_PARTNER_SUCCESS,
    EDIT_PARTNER_FAILURE
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
            const result = res.data.filter(p => p.role !== "Admin");
            dispatch(getAllPartnersSuccess(result));
        }).catch(err => {
            dispatch(getAllPartnersFailure(err));
        });
    }
}

export const deletePartnerRequest = () => {
    return {
        type: DELETE_PARTNER_REQUEST
    }
}

export const deletePartnerSuccess = payload => {
    return {
        type: DELETE_PARTNER_SUCCESS,
        payload
    }
}

export const deletePartnerFailure = payload => {
    return {
        type: DELETE_PARTNER_FAILURE,
        payload
    }
}

export const deletePartner = (id) => {
    return dispatch => {
        dispatch(deletePartnerRequest());
        deleteReq('/api/user/' + id).then(res => {
            const result = res.data;
            dispatch(deletePartnerSuccess(result));
            dispatch(getAllPartners());
        }).catch(err => {
            dispatch(deletePartnerFailure(err));
        });
    }
}

export const resetStateRequest = () => {
    return {
        type: RESET_STATE
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch(resetStateRequest());
    }
}

export const getPartnerRequest = () => {
    return {
        type: GET_PARTNER_REQUEST
    }
}

export const getPartnerSuccess = payload => {
    return {
        type: GET_PARTNER_SUCCESS,
        payload
    }
}

export const getPartnerFailure = payload => {
    return {
        type: GET_PARTNER_FAILURE,
        payload
    }
}

export const editPartnerRequest = () => {
    return {
        type: EDIT_PARTNER_REQUEST
    }
}

export const editPartnerSuccess = payload => {
    return {
        type: EDIT_PARTNER_SUCCESS,
        payload
    }
}

export const editPartnerFailure = payload => {
    return {
        type: EDIT_PARTNER_FAILURE,
        payload
    }
}

export const editPartner = (partner) => {
    return dispatch => {
        dispatch(editPartnerRequest());
        put('/api/user/' + partner.id, partner).then(res => {
            const result = res.data;
            dispatch(editPartnerSuccess(result));
        }).catch(err => {
            dispatch(editPartnerFailure(err));
        });
    }
}

export const getPartner = (id) => {
    return dispatch => {
        dispatch(getPartnerRequest());
        get('/api/user/' + id).then(res => {
            const result = res.data;
            dispatch(getPartnerSuccess(result));
        }).catch(err => {
            dispatch(getPartnerFailure(err));
        });
    }
}