import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import jest from 'jest-mock';
import configureStore from 'redux-mock-store';

//components
import {Login} from '../src/components/Login';
import ConnectedLogin from '../src/components/Login';

describe('LOGIN', () => {
    let wrapper;
    const mockLoginfn = jest.fn();

    const initialState = {
        auth: {
            user: {},
            isAuthenticated: false
        },
        errors: {}
    };

    beforeEach(() => {
        wrapper = shallow(
            <Login
                loginUser={mockLoginfn}
                auth={initialState.auth}
                errors={initialState.errors}
            />);
    });

    it('+++ should be called with the email and password in the state as arguments', () => {
        wrapper.find('#email').simulate('change', {
            target: {
                name: 'email',
                value: 'renkonazbka@gmail.com'
            }
        });
        wrapper.find('#password').simulate('change', {
            target: {
                name: 'password',
                value: '123456'
            }
        });
        wrapper.find('#loginForm').simulate('submit', {
            preventDefault() {
            }
        });

        expect(mockLoginfn.mock.calls[0][0]).toEqual(
            {email: 'renkonazbka@gmail.com', password: '123456'}
        )
    });
});

describe('Connected LOGIN (SMART component)', () => {
    let store, container;
    const mockStore = configureStore();

    const initState = {
        auth: {
            user: {},
            isAuthenticated: false
        },
        errors: {}
    };

    beforeEach(() => {
        store = mockStore(initState);
        container = mount(<Provider store={store}><ConnectedLogin/></Provider>);
    });

    it('+++ render the connected(SMART) component', () => {
        expect(container.find(ConnectedLogin).length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.find(Login).prop('errors')).toEqual(initState.errors);
    });
});



