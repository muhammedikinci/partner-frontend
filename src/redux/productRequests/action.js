import { get, post, put } from '../../helper/request';

import {
    RESET_STATE,
    GET_ALL_MY_REQUESTS_REQUEST,
    GET_ALL_MY_REQUESTS_SUCCESS,
    GET_ALL_MY_REQUESTS_FAILURE,
    SET_NEW_PRODUCT_REQUEST_REQUEST,
    SET_NEW_PRODUCT_REQUEST_SUCCESS,
    SET_NEW_PRODUCT_REQUEST_FAILURE,
    GET_PRODUCT_REQUEST_REQUEST,
    GET_PRODUCT_REQUEST_SUCCESS,
    GET_PRODUCT_REQUEST_FAILURE,
    EDIT_PRODUCT_REQUEST_REQUEST,
    EDIT_PRODUCT_REQUEST_SUCCESS,
    EDIT_PRODUCT_REQUEST_FAILURE,
    GET_ALL_REQUESTS_REQUEST,
    GET_ALL_REQUESTS_SUCCESS,
    GET_ALL_REQUESTS_FAILURE,
} from './constants.js';

// reset state start
export const resetStateAction = () => {
    return {
        type: RESET_STATE
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch(resetStateAction());
    }
}
// reset state end

// get all my requests start
export const getAllMyRequestsRequest = () => {
    return {
        type: GET_ALL_MY_REQUESTS_REQUEST
    }
}

export const getAllMyRequestsSuccess = payload => {
    return {
        type: GET_ALL_MY_REQUESTS_SUCCESS,
        payload
    }
}

export const getAllMyRequestsFailure = payload => {
    return {
        type: GET_ALL_MY_REQUESTS_FAILURE,
        payload
    }
}

export const getAllMyRequests = () => {
    return dispatch => {
        dispatch(getAllMyRequestsRequest());
        get('/api/product-request/get-all-my-requests').then(res => {
            const requests = res.data;
            dispatch(getAllMyRequestsSuccess(requests));
        }).catch(err => {
            dispatch(getAllMyRequestsFailure(err));
        });
    }
}
// get all my requests end

// set new product request start
export const setNewProductRequestRequest = () => {
    return {
        type: SET_NEW_PRODUCT_REQUEST_REQUEST
    }
}

export const setNewProductRequestSuccess = payload => {
    return {
        type: SET_NEW_PRODUCT_REQUEST_SUCCESS,
        payload
    }
}

export const setNewProductRequestFailure = payload => {
    return {
        type: SET_NEW_PRODUCT_REQUEST_FAILURE,
        payload
    }
}

export const setNewProductRequest = (productRequest) => {
    return dispatch => {
        dispatch(setNewProductRequestRequest());
        post('/api/product-request', productRequest).then(res => {
            const requests = res.data;
            dispatch(setNewProductRequestSuccess(requests));
        }).catch(err => {
            dispatch(setNewProductRequestFailure(err));
        });
    }
}
// set new product request end

// get product request start
export const getProductRequestRequest = () => {
    return {
        type: GET_PRODUCT_REQUEST_REQUEST
    }
}

export const getProductRequestSuccess = payload => {
    return {
        type: GET_PRODUCT_REQUEST_SUCCESS,
        payload
    }
}

export const getProductRequestFailure = payload => {
    return {
        type: GET_PRODUCT_REQUEST_FAILURE,
        payload
    }
}

export const getProductRequest = (id, isAdmin) => {
    return dispatch => {
        dispatch(getProductRequestRequest());
        get('/api/product-request/' + (!isAdmin ? "my/" : "") + id).then(res => {
            const request = res.data;
            dispatch(getProductRequestSuccess(request));
        }).catch(err => {
            dispatch(getProductRequestFailure(err));
        });
    }
}
// get product request end

// get product request start
export const editProductRequestRequest = () => {
    return {
        type: EDIT_PRODUCT_REQUEST_REQUEST
    }
}

export const editProductRequestSuccess = payload => {
    return {
        type: EDIT_PRODUCT_REQUEST_SUCCESS,
        payload
    }
}

export const editProductRequestFailure = payload => {
    return {
        type: EDIT_PRODUCT_REQUEST_FAILURE,
        payload
    }
}

export const editProductRequest = (productRequest, isAdmin) => {
    return dispatch => {
        dispatch(editProductRequestRequest());
        put('/api/product-request' + (!isAdmin ? "/my" : ""), productRequest).then(res => {
            const request = res.data;
            dispatch(editProductRequestSuccess(request));
        }).catch(err => {
            dispatch(editProductRequestFailure(err));
        });
    }
}
// get product request end

// get all requests start
export const getAllRequestsRequest = () => {
    return {
        type: GET_ALL_REQUESTS_REQUEST
    }
}

export const getAllRequestsSuccess = payload => {
    return {
        type: GET_ALL_REQUESTS_SUCCESS,
        payload
    }
}

export const getAllRequestsFailure = payload => {
    return {
        type: GET_ALL_REQUESTS_FAILURE,
        payload
    }
}

export const getAllRequests = () => {
    return dispatch => {
        dispatch(getAllRequestsRequest());
        get('/api/product-request').then(res => {
            const requests = res.data;
            dispatch(getAllRequestsSuccess(requests));
        }).catch(err => {
            dispatch(getAllRequestsFailure(err));
        });
    }
}
// get all requests end