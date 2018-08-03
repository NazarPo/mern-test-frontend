import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {GET_ERRORS, REMOVE_CURRENT_USER, SET_CURRENT_USER} from "../actions/types";

export const registerUser = (data, history) => dispatch =>{
    axios.post('http://localhost:4000/users/register', data)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const loginUser = data => dispatch => {
    axios.post('http://localhost:4000/users/login', data)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: decoded
            });
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch({
        type: REMOVE_CURRENT_USER,
        payload: {}
    })
};

