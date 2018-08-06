import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from "../actions/authActions";
import TextInputFieldGroup from "./atoms/TextInputFieldGroup";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            isAuthenticated: false
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated)
            this.props.history.push('/home');
    }

    componentWillReceiveProps(props) {
        if (props.auth.isAuthenticated)
            this.props.history.push('/home');
        if (props.errors)
            this.setState({ errors: props.errors })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(user);
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const {errors} = this.state;

        if (this.state.isAuthenticated) {
            return <Redirect to='home'/>;
        }
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>

                            <form onSubmit={this.onSubmit}>
                                <TextInputFieldGroup
                                    placeholder='Email address'
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputFieldGroup
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={errors.password}
                                />

                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);