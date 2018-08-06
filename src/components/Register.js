import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from "../actions/authActions";
import TextInputFieldGroup from "./atoms/TextInputFieldGroup";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmationPassword: '',
            errors: {}
        };
    }

    componentWillReceiveProps(next) {
        if(next.errors) {
            this.setState({
                errors: next.errors
            })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmationPassword: this.state.confirmationPassword
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>

                            <form noValidate onSubmit={this.onSubmit}>
                                <TextInputFieldGroup
                                    placeholder='Firstname'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    error={errors.firstName}
                                />
                                <TextInputFieldGroup
                                    placeholder='Lastname'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                    error={errors.lastName}
                                />
                                <TextInputFieldGroup
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    info='This site uses Gravatar so if you want a profile image, use a Gravatar email'
                                />
                                <TextInputFieldGroup
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={errors.password}
                                />
                                <TextInputFieldGroup
                                    placeholder='Confirmation password'
                                    name='confirmationPassword'
                                    type='password'
                                    value={this.state.confirmationPassword}
                                    onChange={this.onChange}
                                    error={errors.confirmationPassword}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
      errors: state.errors
  }
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register));