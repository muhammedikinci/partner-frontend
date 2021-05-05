export const getToken = () => {
    return window.localStorage.getItem("PARTNER_AUTH_TOKEN");
}

export const setToken = (token) => {
    window.localStorage.setItem("PARTNER_AUTH_TOKEN", token);
}