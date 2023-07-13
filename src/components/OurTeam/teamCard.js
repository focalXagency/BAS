import React from "react";
// import teamCardImg from './../../assets/images/teamcard.svg';
import './teamCardStyle.css'

const TeamCard = (props) => {

    return (

            <div className="teamCard">
                <img className="teamCardImg" src={props.url} alt=" jimage" />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
    );
}


export default TeamCard;
