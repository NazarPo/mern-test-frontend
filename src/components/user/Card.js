import React from 'react';
import '../../styles/Card.css';

const Card = (props) => {
    const {meetup} = props;
    return (
        <div className="card user-card not-active">
            <img className="card-img-top" src={meetup.image} alt="Card cap" />
            <div className="card-body">
                <h4>{meetup.title}</h4>
                <p className="card-text">{meetup.description}</p>
                <h6><b>Дата проведення: </b>{ new Date(meetup.date).toLocaleDateString() }</h6>
                <h6><b>Час початку: </b>16:00</h6>
                <h6><b>Адреса: </b>м.Черкаси, вул.Грушевського 19/3</h6>
            </div>
            <div className="card-footer">
                {
                    props.children
                }
            </div>
        </div>
    );
}

export default Card;