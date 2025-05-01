import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log("Clicked!");
    };

    const items = [
        { id:'111', label: "Can I use React", content: "You can" },
        { id:'222', label: "Can I use Javascript", content: "You can't" },
        { id:'333', label: "Can I use CSS", content: "You will" },
    ];
    return (
        <div>
           
            <Accordion items={items}/>
        </div>
    );
}

export default App;
