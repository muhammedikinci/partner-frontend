import { getToken } from "./token";

export const getHeader = () => {
    let token = getToken();

    return { 
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    };
}