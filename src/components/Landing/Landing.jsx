import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import './Landing.css';
import Typewriter from 'typewriter-effect';
import langingimage from './../../assets/images/flash-pic-left.png';

const Landing = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className="landing-container">
            <div className="typewriter-text" data-aos="fade-right">
                <h1>Can You Type... </h1>
                <h1 className="typewriter"> <Typewriter
                    options={{
                        strings: ['Fast!', 'Correct!', 'Accurate!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h1>
                <Link id="landing-start-button" className="btn btn-theme" to='/challenge-section'>Start Challenge</Link>
            </div>
            <div className="landing-image" data-aos="fade-left">
                <img alt="landing-image" rel="noreferrer" src={langingimage} />
            </div>
        </div>
    )
}

export default Landing;