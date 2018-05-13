import initialState from '../initialState';

export default function logout(state = initialState, action) {
    switch (action.type) {
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isSuccess: true
            }
        default:
            return state;
    }
}