import { combineReducers }from 'redux';
import errorsReducer from './errorsReducer';
import authReducer from './authReducer';
import meetupReducer from './meetupReducer';

export default combineReducers({
    meetup: meetupReducer,
    errors: errorsReducer,
    auth: authReducer
})