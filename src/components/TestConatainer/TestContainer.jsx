import React  from "react";
import "./TestContainer.css";
import Challenge from "../Challenge/Challenge";

const TestContainer = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        paragraph,
    }) => {
    
    return(
        <div className="test-container">
            {/* test container */}
            <Challenge  
                words={words}
                characters={characters} 
                speed={speed}
                isTestStarted={isTestStarted}
                timer={timer}
                paragraph={paragraph}
            />
        </div>
    )
}

export default TestContainer;