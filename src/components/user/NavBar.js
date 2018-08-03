import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logoutUser} from "../../actions/authActions";
import '../../styles/NavBar.css';

class NavBar extends Component {
    logout = () => {
        this.props.logoutUser();
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="user-profile-div">
                <img src={user.avatar} className="rounded-circle" alt='User gravatar avatar' />
                <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                        <a href="" className="nav-link dropdown-toggle" id="navDropDownLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {
                                user.firstName + ' ' + user.lastName
                            }
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navDropDownLink">
                            <Link className="dropdown-item" to="/home/view-profile">Профіль</Link>
                            <Link className="dropdown-item" to="/home/edit-profile">Редагувати профіль</Link>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="/home" onClick={this.logout}>Вийти</a>
                        </div>
                    </li>
                </ul>
            </div>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Зареєструватися
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Увійти
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded home-nav">
                <div className="container">
                    <img className="navbar-brand"
                         src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/logo.png" alt=""/>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">InterLink MeetUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home/meetups">Минулі події</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home/active-meetup">Майбутні події</Link>
                            </li>
                        </ul>
                        {
                            isAuthenticated ? authLinks : guestLinks
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(NavBar);