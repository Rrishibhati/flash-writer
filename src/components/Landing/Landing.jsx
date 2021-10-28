import React from "react";
import './Landing.css';
import Typewriter from 'typewriter-effect';
import langingimage from './../../assets/images/flash-pic-left.png';

const Landing = () => {

    return(
        <div className="landing-container">
            <div className="typewriter-text">
                <h1>Are You&nbsp;
                <Typewriter
                    options={{
                        strings: ['Fast!', 'Correct!', 'Accurate!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h1>
            </div>
            <div className="landing-image">
                <img alt="landing-image" rel="noreferrer" src={langingimage} />
            </div>
        </div>
    )
}

export default Landing;