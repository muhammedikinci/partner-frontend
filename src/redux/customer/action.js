import { post } from '../../helper/request';
import { setToken } from "../../helper/token";
import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILURE,
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
            }

            dispatch(getLoginSuccess(customer));
        }).catch(err => {
            dispatch(getLoginFailure(err));
        });
    }
}