import React  from "react";
import "./ChallengeSection.css";
import ResultSection from "../ResultSection/ResultSection";
import Typewriter from 'typewriter-effect';


const ChallengeSection = () => {

    return(
        <div className="challenge-section-container">
            <div className="challenge-section-header-conatainer">
                <h1 className="challenge-section-header">
                    <Typewriter
                        options={{
                            strings: ['Are you ready for flash test ?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    
                </h1>

                <ResultSection />
            </div>
        </div>
    )
}

export default ChallengeSection;