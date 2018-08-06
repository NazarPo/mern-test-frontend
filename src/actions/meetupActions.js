import axios from 'axios';
import { GET_MEETUPS } from "../actions/types";

export const getMeetups = () => dispatch => {
    axios.get('http://localhost:4000/meetups')
        .then(res => dispatch({
            type: GET_MEETUPS,
            payload: res.data
        }))
        .catch(err => console.log(err))
};

export const registerUserOnMeetup = (meetup_id) => dispatch => {
    axios.put(`http://localhost:4000/meetups/${meetup_id}/users`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};