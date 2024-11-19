export const FETCH_USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const doLogin = (response) => {
    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: response
    };
};