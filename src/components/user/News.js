import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import PropTypes from 'prop-types';
import {getMeetups, registerUserOnMeetup} from "../../actions/meetupActions";

class News extends Component {
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

    isMeetupActive = date => {
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
        if ( !this.activeMeetups(meetups).length ) {
            return (
                <div className='no-meetups-info'>
                    <h4>Нажаль, активних Meetup'ів немає</h4>
                </div>
            )
        } else {
            return (
                <div className="row justify-content-center">
                    {
                        meetups.map(meetup => {
                            if (this.isMeetupActive(meetup.date)) {
                                return (
                                    <Card
                                        key={meetup._id}
                                        meetup={meetup}
                                    >
                                        <button
                                            id={meetup.id}
                                            type="button"
                                            className="btn btn-success"
                                            onClick={_this.onMeetupRegisterClickHandler}
                                        >Зареєструватися
                                        </button>
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

News.propTypes = {
    registerUserOnMeetup: PropTypes.func.isRequired,
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    meetups: state.meetups
});

export default connect(mapStateToProps, {getMeetups, registerUserOnMeetup})(News);