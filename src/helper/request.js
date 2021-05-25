import { getHeader } from '../helper/header'
import { removeToken } from '../helper/token'
import axios from 'axios';

const API_URL = "http://localhost:5000";
const LOGIN_URL = "/giris";

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.message.indexOf('code 401') !== -1 || error.message.indexOf('code 403') !== -1) {
        removeToken();
        window.location.href = LOGIN_URL;
    }

    return Promise.reject(error.response.data);
  });

export const post = (url, data) => {
    return axios.post(API_URL + url, data, getHeader());
}

export const get = (url) => {
    return axios.get(API_URL + url, getHeader());
}

export const deleteReq = (url) => {
    return axios.delete(API_URL + url, getHeader());
}

export const put = (url, data) => {
    return axios.put(API_URL + url, data, getHeader());
}

export const customPost = (url, data) => {
    return axios.post(url, data);
}