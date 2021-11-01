import React from "react";
import "./ResultSection.css";

const ResultSection = () => {

    return(
        <div className="result-section-container">
            <div className="result-summary">
                <p>
                    <b>Alphabets : </b> 56
                </p>

                <p>
                    <b>Words : </b> 23
                </p>

                <p>
                    <b>Speed : </b> 12 wpm
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