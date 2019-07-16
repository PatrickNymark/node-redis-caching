import { authConstants } from '../constants';
import { isEmpty, setAuthToken } from '../helpers';
import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('user');
let user;

if(token) {
    user = jwt_decode(token);
    // .valueOf to get same date format as jwt exp.
    if(user) {
        const currentDate = Date.now().valueOf() / 1000;
        // check for expired
        if(user.exp < currentDate) {
            localStorage.removeItem('user');
        };
    
        //set axios default header for future requests
        setAuthToken(token);
    }
}

const initialState = {
    isAuthenticated: !isEmpty(user),
    loading: false,
    user
};


export function authentication(state = initialState, action) {
    switch (action.type) {
    case authConstants.LOGIN_REQUEST:
        return {
        loading: true,
        user: action.user
        };
    case authConstants.LOGIN_SUCCESS:
        return {
        loading: false,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
        };
    case authConstants.LOGIN_FAILURE:
        return {
        errors: action.error
        };
    case authConstants.LOGOUT:
        return {};
    default:
        return state
    }
}