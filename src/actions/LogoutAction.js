export function LogOutSuccess() {
    return {
        type: 'LOGOUT_SUCCESS'
    };
}
export function logOutUser() {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch(LogOutSuccess());
    };
}