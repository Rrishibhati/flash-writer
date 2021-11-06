import React  from "react";
import "./TestContainer.css";
import Challenge from "../Challenge/Challenge";

const TestContainer = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        inputChange,
        paragraph_array,
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
                inputChange={inputChange}
                paragraph_array={paragraph_array}
            />
        </div>
    )
}

export default TestContainer;