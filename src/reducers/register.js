import initialState from '../initialState';

export default function register(state = initialState, action) {
    switch (action.type) {
        case 'REGISTRATION_HAS_ERRORED':
            return {
                ...state,
                hasErrored: true,
                isLoading: false
            }
        case 'REGISTRATION_IN_PROGRESS':
            return {
                ...state,
                isLoading: true
            }
        case 'REGISTRATION_SUCCESS':
            return {
                ...state,
                isSuccess: true,
                isLoading: false
            }
        default:
            return state;
    }
}