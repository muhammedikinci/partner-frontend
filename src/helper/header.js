import { getToken } from "./token";

export const getHeader = () => {
    let token = getToken();

    return { 
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    };
}