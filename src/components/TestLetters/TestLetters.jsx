import React from "react";
import "./TestLetter.css";

const TestLetters = ({ character, status }) => {
    const letter_class = {
        'not-attempted' : 'text-letter-not-attempted',
        'correct' : 'text-letter-corrected',
        'not-correct' : 'text-letter-not-corrected',
    }[status];

    return(
        <span className={`text-letter ${letter_class}`}>{character}</span>
    )
}

export default TestLetters;