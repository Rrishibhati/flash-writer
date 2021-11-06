import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Landing from "./../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const paragraphAPIUrl = 'http://metaphorpsum.com/paragraphs/1/10';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            words : 60,
            characters : 30,
            speed : 10,
            isTestStarted : false,
            timer : 60,
            paragraph : 'This is test paragraph from state right now!',
            challengeStatus : true,
        }

        axios.get(paragraphAPIUrl).then((response) => {
            console.log(response.data);
        });
    }

    render() {
        return (
            <div className="app-container">
                <Header />
                <Landing />
                <ChallengeSection 
                    words={this.state.words}
                    characters={this.state.characters} 
                    speed={this.state.speed}
                    isTestStarted={this.state.isTestStarted}
                    timer={this.state.timer}
                    paragraph={this.state.paragraph}
                    challengeStatus={this.state.challengeStatus}
                />
                <Footer />
            </div>
        )
    }
}

export default App;