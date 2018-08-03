import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {logoutUser} from './actions/authActions';

import {Provider} from 'react-redux';
import store from './store';

import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import {SET_CURRENT_USER} from "./actions/types";
import UserPage from "./components/user/UserPage";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch({ type: SET_CURRENT_USER, payload: decoded });

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <div>
                            <Route path='/register' component={Register}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/home' component={UserPage}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
