import ColorBox from "../components/ColorBox";
import "./ColorBoxes.css";

function ColorBoxes({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={i} colors={colors} />);
    }
    return <div className="row">{boxes}</div>;
}

export default ColorBoxes;
