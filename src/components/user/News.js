import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import PropTypes from 'prop-types';
import { getMeetups } from "../../actions/meetupActions";

class News extends Component {
    componentDidMount() {
        this.props.getMeetups();
    }

    onMeetupRegisterHandler = (e) => {
        console.log(e.target);
    };

    render() {
        const {meetups} = this.props;
        const _this = this;
        return (
            <div className="row justify-content-center">
                {
                    meetups.map(meetup => {
                        return <Card
                            key={meetup._id}
                            id={meetup._id}
                            meetup={meetup}
                            onClick={_this.onMeetupRegisterHandler}
                        />
                    })
                }
            </div>
        );
    }
}

News.propTypes = {
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    meetups: state.meetup.meetups
});

export default connect(mapStateToProps, { getMeetups })(News);