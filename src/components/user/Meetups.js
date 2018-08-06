import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import PropTypes from 'prop-types';
import {getMeetups, registerUserOnMeetup} from "../../actions/meetupActions";

class Meetups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetups: []
        }
    }

    componentDidMount() {
        this.props.getMeetups();
    }

    componentWillReceiveProps(props) {
        this.setState({
            meetups: props.meetups
        })
    }

    onMeetupRegisterClickHandler = (e) => {
        this.props.registerUserOnMeetup(e.target.id);
    };

    isMeetupActive = (date) => {
        return Date.now < date;
    };

    activeMeetups = meetups => {
        const _this = this;
        return meetups.filter(function (m) {
            if (_this.isMeetupActive(m.date))
                return m;
        })
    };

    render() {
        const {meetups} = this.state;
        const _this = this;
        if ( this.activeMeetups(meetups).length ) {
            return (
                <div className='no-meetups-info'>
                    <h4>Нажаль, історія Meetup'ів порожня</h4>
                </div>
            )
        } else {
            return (
                <div className="row justify-content-center">
                    {
                        meetups.map(meetup => {
                            if (!this.isMeetupActive(meetup.date)) {
                                return (
                                    <Card
                                        key={meetup._id}
                                        id={meetup._id}
                                        meetup={meetup}
                                        onClick={_this.onMeetupRegisterClickHandler}
                                    >
                                        <a href={meetup.blogLink}>
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                            >Дізнатися більше
                                            </button>
                                        </a>
                                    </Card>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            );
        }
    }
}

Meetups.propTypes = {
    registerUserOnMeetup: PropTypes.func.isRequired,
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    meetups: state.meetups
});

export default connect(mapStateToProps, {getMeetups, registerUserOnMeetup})(Meetups);