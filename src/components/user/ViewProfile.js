import React, {Component} from 'react';
import '../../styles/Profile.css';
import {connect} from "react-redux";

class ViewProfile extends Component {
    componentDidMount() {
        if (!this.props.auth.isAuthenticated)
            this.props.history.push('/login')
    }
    render() {
        const {user} = this.props.auth;

        return (
            <div className="view-profile">
                <img src={user.avatar} alt="User profile"/>
                <div id="profile">
                    <h3>{user.firstName + ' ' + user.lastName}</h3>
                    <hr/>
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <h5>{user.email}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ViewProfile);