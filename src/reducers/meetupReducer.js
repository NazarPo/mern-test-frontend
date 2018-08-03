import { ADD_MEETUPS} from "../actions/types";

const initialState = {
    meetups: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_MEETUPS:
            return {
                ...state,
                meetups: state.meetups.concat(action.payload)
            };
        default:
            return state;
    }
}