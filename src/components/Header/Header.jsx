import React from "react";
import './Header.css';

import logo from './../../assets/images/logo.png';

const Header = () => {

    return (
        <div className="header-container">
            <div className="header-left">
                <div className="header-logo">
                    <img src={logo} className="logo-image" alt="log-image" rel="noreferrer" />
                    <span className="logo-text">Flash Writer</span>
                </div>
            </div>
            <div className="header-right">
                <a className="header-link" href="https://github.com/Rrishibhati" target="_blank">Github</a>
            </div>
        </div>
    )
}

export default Header;