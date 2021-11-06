import React  from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestConatainer/TestContainer";
import ResultSection from "./../ResultSection/ResultSection";


const ChallengeSection = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        paragraph,
        challengeStatus
    }) => {
    
    let component_shown = challengeStatus ? <TestContainer  
                                                    words={words}
                                                    characters={characters} 
                                                    speed={speed}
                                                    isTestStarted={isTestStarted}
                                                    timer={timer}
                                                    paragraph={paragraph}
                                                /> : 
                                                <ResultSection 
                                                    words={words} 
                                                    characters={characters} 
                                                    speed={speed}
                                                />;

    return(
        <div className="challenge-section-container">
            <div className="challenge-section-header-conatainer">
                <h1 className="challenge-section-header">
                    Speed Test Result
                </h1>

                {component_shown}
            </div>
        </div>
    )
}

export default ChallengeSection;