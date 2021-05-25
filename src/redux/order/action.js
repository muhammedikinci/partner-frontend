import { get } from '../../helper/request';
import { 
    GET_ALL_ORDER_REQUEST,
    GET_ALL_ORDER_SUCCESS, 
    GET_ALL_ORDER_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAILURE,
    RESET_STATE
} from './constants.js';

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const getAllOrderRequest = () => {
    return {
        type: GET_ALL_ORDER_REQUEST
    }
}

export const getAllOrderSuccess = payload => {
    return {
        type: GET_ALL_ORDER_SUCCESS,
        payload
    }
}

export const getAllOrderFailure = payload => {
    return {
        type: GET_ALL_ORDER_FAILURE,
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

export const getOrderByIdRequest = () => {
    return {
        type: GET_ORDER_BY_ID_REQUEST
    }
}

export const getOrderByIdSuccess = payload => {
    return {
        type: GET_ORDER_BY_ID_SUCCESS,
        payload
    }
}

export const getOrderByIdFailure = payload => {
    return {
        type: GET_ORDER_BY_ID_FAILURE,
        payload
    }
}

export const getOrderById = (id) => {
    return dispatch => {
        dispatch(getOrderByIdRequest());
        get('/api/order/' + id).then(res => {
            const order = res.data;

            order.products = JSON.parse(order.products);

            dispatch(getOrderByIdSuccess(order));
        }).catch(err => {
            dispatch(getOrderByIdFailure(err));
        });
    }
}

export const getMyOrders = () => {
    return dispatch => {
        dispatch(getAllOrderRequest());
        get('/api/order/get-all-my-orders').then(res => {
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