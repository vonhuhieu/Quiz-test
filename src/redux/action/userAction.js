export const FETCH_USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';

export const doLogin = (response) => {
    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: response
    };
};

export const doLogout = () => {
    return {
        type: USER_LOGOUT_SUCCESS,
    }
};