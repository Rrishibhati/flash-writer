import React, { createFactory } from "react";
import ChallenegeNav from "./ChallenegeNav";
import TestLetters from "../TestLetters/TestLetters";
import "./Challenge.css";

const Challenge = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        inputChange,
        paragraph_array,
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
                    <strong>00:{timer}</strong>
                </p>

                <p className="timer-title">
                {timerText }
                </p>

                <div className="textarea-container">
                    <div className="textarea-left">
                        <div className="challenge-paragraph">
                            { paragraph_array.map((obj, index) => {
                                return <TestLetters key={index} character={obj.character} status={obj.status} />
                            }) }
                        </div>    
                    </div>
                    <div className="textarea-right">
                        <textarea name="user-text" rows="17" cols="32" placeholder="start typing..."
                            onChange={(e) => inputChange(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Challenge;