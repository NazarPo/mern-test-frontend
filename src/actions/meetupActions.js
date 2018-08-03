import axios from 'axios';
import { ADD_MEETUPS} from "../actions/types";

export const getMeetups = () => dispatch => {
    axios.get('http://localhost:4000/meetups')
        .then(res => dispatch({
            type: ADD_MEETUPS,
            payload: res.data
        }))
        .catch(err => console.log(err))
};