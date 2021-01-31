import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    //stores the cards
    const [pet, setPet] = useState([
        {
            name: "Monkey",
            url: "https://i.imgur.com/gnugYjA.jpg",
        },
        {
            name: "BeebBoop",
            url: "https://i.imgur.com/gnugYjA.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {pet.map((p) => (
                    <TinderCard
                        className="swipe"
                        key={p.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, p.name)}
                        onCardLeftScreen={() => outOfFrame(p.name)}
                    >
                        <div
                            //renders text
                            style={{ backgroundImage: `url(${p.url})` }}
                            className="card"
                        >
                            <h3>{p.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
