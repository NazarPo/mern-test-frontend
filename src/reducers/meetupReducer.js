import { GET_MEETUPS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MEETUPS:
            return action.payload;
        default:
            return state;
    }
}