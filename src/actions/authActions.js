import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {GET_ERRORS, REMOVE_CURRENT_USER, SET_CURRENT_USER} from "../actions/types";

export const registerUser = (data, history) => dispatch =>{
    axios.post('http://localhost:4000/users/register', data)
        .then(res => history.push('/login'))
        .catch(err => dispatch(getErrorsAction(err.response.data)))
};

export const loginUser = data => dispatch => {
    axios.post('http://localhost:4000/users/login', data)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUserAction(decoded));
        })
        .catch(err => dispatch(getErrorsAction(err.response.data)))
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(removeCurrentUserAction())
};

export function removeCurrentUserAction() {
    return {
        type: REMOVE_CURRENT_USER
    }
}

export function setCurrentUserAction(user) {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export  function getErrorsAction(errors) {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}

