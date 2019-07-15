import { authConstants } from '../constants';
import { authService } from '../services';
import { history, setAuthToken } from '../helpers';

export const authActions = {
    login,
    logout
};

function login(email, password) {
  return dispatch => {
        dispatch(request({ email }));

        authService.login(email, password)
            .then(user => { 
                dispatch(success(user));
                history.push('/');
            }).catch(err => {
                const { message } = err.response.data;
                dispatch(failure(message))
            })
    };  

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    // remove default axios header
    setAuthToken();

    localStorage.removeItem('user');
    return { type: authConstants.LOGOUT };
}
