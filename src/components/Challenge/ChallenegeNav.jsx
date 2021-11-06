import React from "react";
import "./ChallengeNav.css";

const ChallenegeNav = ({ title, value }) => {
    
    return (
        <div className="challenge-nav-container">
            <div className="nav-title">{title} { title == 'Speed' ? '(WPM)' : '' }</div>
            <div className="nav-value">{value}</div>
        </div>
    )
}

export default ChallenegeNav;