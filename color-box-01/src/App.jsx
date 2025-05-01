import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ColorBox from "./components/ColorBox";
import ColorBoxes from "./pages/ColorBoxes";

function App() {
    const colors = [
        "#FF5733", // Vibrant Orange
        "#33FF57", // Bright Green
        "#3357FF", // Bold Blue
        "#F1C40F", // Yellow
        "#8E44AD", // Purple
        "#2ECC71", // Fresh Green
        "#E74C3C", // Soft Red
        "#1ABC9C", // Aqua
        "#34495E", // Dark Slate Blue
        "#D35400", // Deep Orange
        "#7F8C8D", // Gray
        "#2980B9", // Strong Blue
        "#C0392B", // Rich Red
        "#27AE60", // Medium Green
        "#BDC3C7", // Light Gray
        "#ECF0F1", // Very Light Gray (Almost White)
    ];

    return (
        <div className="Boxes">
            <ColorBoxes colors={colors} />
        </div>
    );
}
export default App;
