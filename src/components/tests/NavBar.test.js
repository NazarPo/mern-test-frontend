import React from 'react';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

//components
import Login from '../Login';
import {SET_CURRENT_USER} from "../../actions/types";
import {  setCurrentUserAction, getErrorsAction, removeCurrentUserAction } from '../../actions/authActions';

describe('LOGIN PAGE RENDER COMPONENT', () => {
    const mockStore = configureStore();
    let store,wrapper;
    const initialState = {
        auth: {
            id: 2,
            name: 'Nazar',
            email: 'renkonazbka@gmail.com'
        }
    };

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><Login auth={{id: 2, name: 'Nazar', email: 'renkonazbka@gmail.com'}} /></Provider>);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(Login).prop('auth')).toEqual(initialState.auth);
    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch( setCurrentUserAction('grghrehjrtjtykjy5r6544hw4t4ewhrtjrty') );
        store.dispatch( removeCurrentUserAction({}) );
        store.dispatch( getErrorsAction({}) );
        action = store.getActions();
        expect(action[0].type).toBe("SET_CURRENT_USER");
        expect(action[1].type).toBe("REMOVE_CURRENT_USER");
        expect(action[2].type).toBe("GET_ERRORS");
    });
});

