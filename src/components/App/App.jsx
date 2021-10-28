import React from "react";
import Header from "./../Header/Header";
import Landing from "./../Landing/Landing";

class App extends React.Component{


    render() {
        return (
            <div className="app-container">
                <Header />
                <Landing />
            </div>
        )
    }
}

export default App;