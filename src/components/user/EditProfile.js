import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputFieldGroup from "../atoms/TextInputFieldGroup";
import SelectInputFieldGroup from "../atoms/SelectInputFieldGroup";
import NumberInputFieldGroup from "../atoms/NumberInputFieldGroup";
import RadioInputFieldGroup from "../atoms/RadioInputsFieldGroup";

class CreateProfile extends Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const universityOptions = [
            { label: '* Обери університет', value: 0 },
            { label: 'Черкаський національний університет ім Б.Хмельницького', value: 'Черкаський національний університет ім Б.Хмельницького' },
            { label: 'Черкаський державний технічний університет', value: 'Черкаський державний технічний університет' }
        ];

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
                                    onChange={this.onChange}
                                />
                                <TextInputFieldGroup
                                    type="tel"
                                    placeholder="Phone number (in the form xxx-xxx-xxxx)"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    onChange={this.onChange}
                                />
                                <TextInputFieldGroup
                                    type="date"
                                    placeholder="Birth date"
                                    name="birth"
                                    onChange={this.onChange}
                                />
                                <TextInputFieldGroup
                                    type="url"
                                    placeholder="Social network"
                                    name="socialNetwork"
                                    onChange={this.onChange}
                                />

                                <SelectInputFieldGroup
                                    name="university"
                                    options={universityOptions}
                                    onChange={this.onChange}
                                />

                                <TextInputFieldGroup
                                    placeholder="Факультет"
                                    name="faculty"
                                    onChange={this.onChange}
                                />

                                <NumberInputFieldGroup
                                    type="number"
                                    name="course"
                                    min="1"
                                    max="5"
                                    onChange={this.onChange}
                                />

                                <RadioInputFieldGroup
                                    name="hasLaptop"
                                />

                                <button type='submit'>
                                    Submit
                                </button>
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