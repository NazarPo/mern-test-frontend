import reducer from '../src/reducers/authReducer';
import * as types from '../src/actions/types';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isAuthenticated: false,
            user: {}
        })
    });

    it('should handle SET_CURRENT_USER action', () => {
        expect(
            reducer({}, {
                type: types.SET_CURRENT_USER,
                payload: {
                    id: '1',
                    name: 'Jhon Doe',
                    email: 'john@example.com',
                    handle: 'johndoe'
                }
            })
        ).toEqual({
            isAuthenticated: true,
            user: {
                id: '1',
                name: 'Jhon Doe',
                email: 'john@example.com',
                handle: 'johndoe'
            }
        })
    });

    it('should handle REMOVE_CURRENT_USER action', () => {
        expect(
            reducer({}, {
                type: types.REMOVE_CURRENT_USER,
                payload: {}
            })
        ).toEqual({
            isAuthenticated: false,
            user: {}
        })
    });
});