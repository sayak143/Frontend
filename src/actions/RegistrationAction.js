import axios from 'axios';

export function RegistrationHasErrored() {
    return {
        type: 'REGISTRATION_HAS_ERRORED'
    };
}
export function registering() {
    return {
        type: 'REGISTRATION_IN_PROGRESS'
    };
}
export function RegistrationSuccess(data) {
    return {
        type: 'REGISTRATION_SUCCESS',
        data
    };
}
export function registerUser(data) {
    return (dispatch) => {
        dispatch(registering());
        axios.post('http://localhost:8070/register',
            data,{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type' : 'application/JSON; charset=UTF-8',
                     'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
                  }
            }
            
        )
        .then((response) => dispatch(RegistrationSuccess(response.data)))
        .catch(() => dispatch(RegistrationHasErrored()));
    };
}