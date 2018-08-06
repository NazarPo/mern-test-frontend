import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Meetup from './Meetup';
import ViewProfile from "./ViewProfile";
import News from "./News";
import Meetups from "./Meetups";
import EditProfile from './EditProfile';

class UserPage extends Component {
    render() {
        return (
            <div className='UserPage'>
                <NavBar />
                <div className='container'>
                    <Route exact path="/home" component={Meetup} />
                    <Route path="/home/view-profile" component={ViewProfile} />
                    <Route path="/home/active-meetup" component={News} />
                    <Route path="/home/meetups" component={Meetups} />
                    <Route path="/home/edit-profile" component={EditProfile} />
                </div>
            </div>
        );
    }
}

export default UserPage;