import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Landing from "./../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

class App extends React.Component{


    render() {
        return (
            <div className="app-container">
                <Header />
                <Landing />
                <ChallengeSection />
                <Footer />
            </div>
        )
    }
}

export default App;