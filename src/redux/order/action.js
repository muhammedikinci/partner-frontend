import { 
    FETCH_GET_ALL_ORDER_REQUEST,
    FETCH_GET_ALL_ORDER_SUCCESS, 
    FETCH_GET_ALL_ORDER_FAILURE
} from './constants.js';

import { get } from '../../helper/request';

export const getAllOrderRequest = () => {
    return {
        type: FETCH_GET_ALL_ORDER_REQUEST
    }
}

export const getAllOrderSuccess = payload => {
    return {
        type: FETCH_GET_ALL_ORDER_SUCCESS,
        payload
    }
}

export const getAllOrderFailure = payload => {
    return {
        type: FETCH_GET_ALL_ORDER_FAILURE,
        payload
    }
}

export const getAllOrders = () => {
    return dispatch => {
        dispatch(getAllOrderRequest());
        get('/api/order').then(res => {
            const orders = res.data;

            for (let o of orders) {
                o.key = o.id
            }

            dispatch(getAllOrderSuccess(orders));
        }).catch(err => {
            dispatch(getAllOrderFailure(err));
        });
    }
}