import PlayerScore from "../components/PlayerScore";
import { useState } from "react";

function makeArray(num) {
    return new Array(num).fill(0);
}

function ScoreKeeper({ numPlayers, target }) {
    const [playerScores, setPlayerScores] = useState(makeArray(numPlayers));

    // playerScores.map( (arr, id) => {
    //     if (arr.id === id) {
    //         return {...item, price: 10.99}
    //     } else {
    //         return item;
    //     }
    // });

    const handleDataFromChild = (data) => {
        console.log("Data from child: ", data);
        setPlayerScores([1,2, ...playerScores]);
    };

    // function that creates a button for each player
    const players = [];
    for (let i = 0; i < numPlayers; i++) {
        players.push(
            <PlayerScore
                key={i}
                id={i + 1}
                sendDataToParent={handleDataFromChild}
                scoreToDisplay={playerScores[i]}
            />
        );
    }

    return (
        <div>
            <div>
                <ul>{players}</ul>
            </div>
            <div>{playerScores}</div>
            <div>
                <button>Reset</button>
            </div>
        </div>
    );
}
export default ScoreKeeper;
