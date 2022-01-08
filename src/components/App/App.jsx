import React from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Landing from "./../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const totolTime = 60;
const paragraphAPIUrl = 'http://metaphorpsum.com/paragraphs/1/10';
const defaultStates = {
    words : 0,
    characters : 0,
    speed : 0,
    isTestStarted : false,
    timer : 10,
    paragraph : [],
    paragraph_array : [],
    challengeStatus : true,
}

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = defaultStates;
    }

    ChallengeHandler() {
        axios.get(paragraphAPIUrl).then((response) => {
            const data = response.data;
            this.setState({
                paragraph : data
            })
            const paragraph_characters = data.split("");
            const paragraph_array = paragraph_characters.map((value) => {
                return {
                    character : value,
                    status : 'not-attempted'
                }
            });
            this.setState({ paragraph_array : paragraph_array })
        });
    }

    componentDidMount(){
        this.ChallengeHandler();    
    }

    startTimer = () => {
        this.setState({
            isTestStarted : true
        });

        //start timer interval
        const timeclock = setInterval(() => { 
            if(this.state.timer > 0) {
                //calculate speed for per minute only
                const timeSpent = totolTime - this.state.timer;
                const speed = (timeSpent <= 0) ? 0 : ((this.state.words > 0) ? Math.floor((this.state.words / timeSpent) * totolTime) : 0);
                this.setState({ 
                    timer : this.state.timer - 1,
                    speed: speed,
                });
            } else {
                clearInterval(timeclock);
                this.setState({
                    challengeStatus : false
                });
                //return <Navigate to="/result" />
            }
        
        }, 10e2);
    }

    inputChangeHandler = (inputText) => {
        const paragraph_length = this.state.paragraph_array.length;
        const index = inputText.length - 1; 
        const characters = inputText.length;
        const words = inputText.split(" ").length;
        if(!this.state.isTestStarted){
            this.startTimer();
        }
        /***
         *  1. Cover under stack condition - if index == 0 then first character of the paragraph should updated as not-attempted
         * 
         *  2. Cover over flow condition - if index > paragraph.length then make a exit
         * 
         *  3. if index < paragraph.length then compare both letters to find is it correct or not correct
         */
        
        if(index < 0){
            this.setState({
                paragraph_array : [
                                    {
                                        character : this.state.paragraph[0],
                                        status : 'not-attempted'
                                    },
                                    ... this.state.paragraph_array.slice(1)
                                  ],
                                  characters,
                                  words
            });
            return;
        }

        if(index > paragraph_length){
            this.setState({ words, characters });
            return;
        }

        var duplicate_array = this.state.paragraph_array;
        if(index < paragraph_length){ 
            // update backspace functionality
            if(!(index == paragraph_length - 1)){
                duplicate_array[index + 1].status = 'not-attempted';
                this.setState({
                    paragraph_array : duplicate_array 
                });
            }

            //now compare the characters
            const isCorrect = (inputText[index] == this.state.paragraph_array[index].character) ? 'correct' : 'not-correct';
            duplicate_array[index].status = isCorrect;
            this.setState({
                paragraph_array : duplicate_array,
                words,
                characters
            });
        }
         
    }

    tryAgainHandler = () => {
        this.setState({
            words : 0,
            characters : 0,
            speed : 0,
            isTestStarted : false,
            timer : 60,
            paragraph : [],
            paragraph_array : [],
            challengeStatus : true
        });
        this.ChallengeHandler();
    }

    render() {
        
        if(!this.state.challengeStatus) {
            return <Navigate to='/challenge-section/result'/>;
        }
        
        return (
            <div className="app-container">
                <Header />
                <Routes>
                    <Route exact path= '/' element={<Landing />} ></Route>
                    <Route exact path= '/challenge-section' element={
                        <ChallengeSection 
                            words={this.state.words}
                            characters={this.state.characters} 
                            speed={this.state.speed}
                            isTestStarted={this.state.isTestStarted}
                            timer={this.state.timer}
                            challengeStatus={this.state.challengeStatus}
                            paragraph_array={this.state.paragraph_array}
                            inputChange={this.inputChangeHandler}
                            tryAgainHandler={this.tryAgainHandler}
                        />
                    }>
                    </Route>
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;