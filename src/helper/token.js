const PARTNER_AUTH_TOKEN = 'PARTNER_AUTH_TOKEN';

export const getToken = () => {
    return window.localStorage.getItem(PARTNER_AUTH_TOKEN);
}

export const setToken = (token) => {
    window.localStorage.setItem(PARTNER_AUTH_TOKEN, token);
}

export const removeToken = () => {
    window.localStorage.removeItem(PARTNER_AUTH_TOKEN);
}