import { getHeader } from '../helper/header'
import axios from 'axios';

const API_URL = "http://localhost:5000";

export const post = (url, data) => {
    return axios.post(API_URL + url, data, getHeader());
}

export const get = (url) => {
    return axios.get(API_URL + url, getHeader());
}