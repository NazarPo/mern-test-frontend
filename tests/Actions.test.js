import React from 'react';
import configureStore  from 'redux-mock-store';
import {getErrorsAction, removeCurrentUserAction, setCurrentUserAction} from "../src/actions/authActions";

describe('actions', () => {
    let store;
    const mockStore = configureStore();
    const initialState = {};

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('+++ check action on dispatching', () => {
        let action;
        store.dispatch(setCurrentUserAction('grghrehjrtjtykjy5r6544hw4t4ewhrtjrty'));
        store.dispatch(removeCurrentUserAction({}));
        store.dispatch(getErrorsAction({}));
        action = store.getActions();
        expect(action[0].type).toBe("SET_CURRENT_USER");
        expect(action[1].type).toBe("REMOVE_CURRENT_USER");
        expect(action[2].type).toBe("GET_ERRORS");
    })
});