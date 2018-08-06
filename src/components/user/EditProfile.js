import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInputFieldGroup from "../atoms/TextInputFieldGroup";


class CreateProfile extends Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="text-center">Edit Profile</h1>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextInputFieldGroup
                                    placeholder="* Profile Handle"
                                    name="handle"

                                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                                />
                                <TextInputFieldGroup
                                    placeholder="Status"
                                    name="status"

                                    info="Give us an idea of where you are at in your career"
                                />
                                <TextInputFieldGroup
                                    placeholder="Company"
                                    name="company"

                                    info="Could be your own company or one you work for"
                                />
                                <TextInputFieldGroup
                                    placeholder="Website"
                                    name="website"

                                    info="Could be your own website or a company one"
                                />
                                <TextInputFieldGroup
                                    placeholder="Location"
                                    name="location"

                                    info="City or city & state suggested (eg. Boston, MA)"
                                />
                                <TextInputFieldGroup
                                    placeholder="* Skills"
                                    name="skills"


                                    info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                                />
                                <TextInputFieldGroup
                                    placeholder="Github Username"
                                    name="githubusername"

                                    info="If you want your latest repos and a Github link, include your username"
                                />
                                <TextInputFieldGroup
                                    placeholder="Short Bio"
                                    name="bio"

                                    info="Tell us a little about yourself"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default CreateProfile;