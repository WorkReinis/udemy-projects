import { useState } from "react";
import "./ColorBox.css";

function randomColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function ColorBox({ colors }) {
    const [boxColor, setBoxColor] = useState(() => randomColor(colors));

    const getColor = () => {
        setBoxColor(randomColor(colors));
    };

    return (
        <div
            className="color-box"
            style={{ backgroundColor: boxColor }}
            onClick={getColor}
        ></div>
    );
}

export default ColorBox;
