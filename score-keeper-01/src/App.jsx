import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreKeeper from "./pages/ScoreKeeper";

function App() {
  

    return (
        <>
            <div>
                <ScoreKeeper numPlayers={10} target={3}/>
            </div>
        </>
    );
}

export default App;
