import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Meetup from './Meetup';
import ViewProfile from "./ViewProfile";
import News from "./News";

class UserPage extends Component {
    render() {
        return (
            <div className='UserPage'>
                <NavBar />
                <div className='container'>
                    <Route exact path="/home" component={Meetup} />
                    <Route path="/home/view-profile" component={ViewProfile} />
                    <Route path="/home/active-meetup" component={News} />
                </div>
            </div>
        );
    }
}

export default UserPage;