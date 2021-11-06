import React, { createFactory } from "react";
import ChallenegeNav from "./ChallenegeNav";
import "./Challenge.css";

const Challenge = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        paragraph
    }) => {

    let timerText = !isTestStarted ? 'Start typing will start the test!' : '';
    return (
        <div className="challenge-container">
            <div className="challenge-container-top">
                <ChallenegeNav title="Words" value={words} />
                <ChallenegeNav title="Characters" value={characters} />
                <ChallenegeNav title="Speed" value={speed} />
            </div>

            <div className="challenge-container-bottom">
                {/* typing challenge */}
                <p className="timer">
                    <strong>{timer}</strong>
                </p>

                <p className="timer-title">
                {timerText }
                </p>

                <div className="textarea-container">
                    <div class="textarea-left">
                        <div className="challenge-paragraph">
                            {paragraph}
                        </div>    
                    </div>
                    <div className="textarea-right">
                        <textarea name="user-text" rows="22" cols="33" placeholder="type here..."></textarea>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Challenge;