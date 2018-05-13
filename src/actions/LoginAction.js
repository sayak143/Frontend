import axios from 'axios';

export function LoginHasErrored() {
    return {
        type: 'LOGIN_HAS_ERRORED'
    };
}
export function LoggingIn() {
    return {
        type: 'LOGIN_IN_PROGRESS'
    };
}
export function LoginSuccess(token) {
    return {
        type: 'LOGIN_SUCCESS',
        token
    };
}
export function loginUser(data) {
    return (dispatch) => {
        dispatch(LoggingIn());
        axios.post('http://localhost:8070/login',
            data,{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type' : 'application/JSON; charset=UTF-8',
                     'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
                  }
            }
            
        )
        .then((response) => dispatch(LoginSuccess(response.data.token)))
        .catch(() => dispatch(LoginHasErrored()));
    };
}