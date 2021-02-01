import { SwipeableDrawer } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "../axios";

function TinderCards() {
    //stores the cards
    const [pet, setPet] = useState([]);

    //It will only run the tender code once
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPet(req.data);
        }

        fetchData();
    }, []);

    const swiped = (nameToDelete) => {
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
                            style={{ backgroundImage: `url(${p.imgUrl})` }}
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
