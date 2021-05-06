const PARTNER_AUTH_ROLE = 'PARTNER_AUTH_ROLE';

export const ADMIN_ROLE = 'Admin';
export const USER_ROLE = 'User';

export const getRole = () => {
    return window.localStorage.getItem(PARTNER_AUTH_ROLE);
}

export const setRole = (role) => {
    window.localStorage.setItem(PARTNER_AUTH_ROLE, role);
}

export const removeRole = () => {
    window.localStorage.removeItem(PARTNER_AUTH_ROLE);
}

export const isAdmin = () => {
    return getRole() === ADMIN_ROLE;
}