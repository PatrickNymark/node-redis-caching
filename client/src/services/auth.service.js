import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { setAuthToken } from '../helpers';

export const authService = {
    login,
    register
};

/**
 * Login user
 * @param {string} email 
 * @param {string} password 
 */
function login(email, password) {
        const payload = { email, password };
    
        return axios.post('/api/users/login', payload).then(response => {
            const token = 'bearer ' + response.data.token;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', token);

            // set axios default header
            setAuthToken(token);

            // decode token to return the user
            const decoded = jwt_decode(token)
            return decoded;
        });
}

/**
 * Register user
 * @param {Object} email
 * @param {String} password 
 */
function register(email, password) {
  const payload = { email, password}
    return axios.post('/api/users/register', payload).then(response => {
        return response.data;
    });
}

