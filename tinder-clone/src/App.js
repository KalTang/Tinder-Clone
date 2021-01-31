import React from "react";
import "./App.css";
import Header from "./Header/Header";
import SwipeButtons from "./Swipe Buttons/SwipeButtons";
import TinderCards from "./Tinder Cards/TinderCards";

function App() {
    return (
        //BEM class naming Convention
        <div className="app">
            {/* Header */}
            <Header />
            {/* Tinder Cards */}
            <TinderCards />
            {/* Swipe Buttons */}
            <SwipeButtons />
        </div>
    );
}

export default App;
