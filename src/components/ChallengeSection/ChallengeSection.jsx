import React  from "react";
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./ChallengeSection.css";
import TestContainer from "../TestConatainer/TestContainer";
import ResultSection from "./../ResultSection/ResultSection";


const ChallengeSection = ({ 
        words,
        characters,
        speed,
        isTestStarted,
        timer,
        challengeStatus,
        inputChange,
        paragraph_array,
        tryAgainHandler,
    }) => {
    
    // let component_shown = challengeStatus ? <TestContainer  
    //                                                 words={words}
    //                                                 characters={characters} 
    //                                                 speed={speed}
    //                                                 isTestStarted={isTestStarted}
    //                                                 timer={timer}
    //                                                 inputChange={inputChange}
    //                                                 paragraph_array={paragraph_array}
    //                                             /> : 
    //                                             <ResultSection 
    //                                                 words={words} 
    //                                                 characters={characters} 
    //                                                 speed={speed}
    //                                                 tryAgainHandler={tryAgainHandler}
    //                                             />;

    return(
        <div className="challenge-section-container">
            <div className="challenge-section-header-conatainer">
                <h1 className="challenge-section-header">
                    {`Flash Writer ${challengeStatus ? 'Challenge' : 'Result' }`}
                </h1>
                <div className="text-right">
                    <Link className="dismiss" to="/">Close</Link>
                </div>
                
                <TestContainer  
                    words={words}
                    characters={characters} 
                    speed={speed}
                    isTestStarted={isTestStarted}
                    timer={timer}
                    inputChange={inputChange}
                    paragraph_array={paragraph_array}
                /> 
                {/* { component_shown } */}
                {/* <Routes>
                    <Route path='/challenge-section' element={ <h1>Rishi cool</h1> 
                        // <TestContainer words={words}
                        //     characters={characters} 
                        //     speed={speed}
                        //     isTestStarted={isTestStarted}
                        //     timer={timer}
                        //     inputChange={inputChange}
                        //     paragraph_array={paragraph_array}
                        // />
                    }></Route>
                    <Route exact path='/challenge-section/result' element={ 
                        <ResultSection 
                            words={words} 
                            characters={characters} 
                            speed={speed}
                            tryAgainHandler={tryAgainHandler}
                        />
                    }></Route>
                </Routes> */}
                

            </div>
        </div>
    )
}

export default ChallengeSection;