import initialState from '../initialState';

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_HAS_ERRORED':
            return {
                ...state,
                hasErrored: true,
                isLoading: false
            }
        case 'LOGIN_IN_PROGRESS':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                token:action.token
            }
        default:
            return state;
    }
}