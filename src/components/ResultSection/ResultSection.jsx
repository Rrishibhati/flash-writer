import React from "react";
import "./ResultSection.css";

const ResultSection = ({ words , characters, speed}) => {

    return(
        <div className="result-section-container">
            <div className="result-summary">
                <p>
                    <b>Characters : </b> {characters}
                </p>

                <p>
                    <b>Words : </b> {words}
                </p>

                <p>
                    <b>Speed : </b> {speed} wpm
                </p>
            </div>

            <div className="result-share-btns">
                <a className="theme-btn try-again">Try Again</a>
                <a className="theme-btn facebook">Facebook</a>
                <a className="theme-btn twitter">Twitter</a>
            </div>
        </div>
    )
}

export default ResultSection;