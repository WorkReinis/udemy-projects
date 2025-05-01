import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log("Clicked!");
    };
    return (
        <div>
            <div>
                <Button rounded outline onClick={handleClick}>
                    <GoCloudDownload />
                    Hello!
                </Button>
            </div>
            <div>
                <Button primary rounded outline onMouseEnter={handleClick}>
                    <GoDatabase />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
                    Secondary
                </Button>
            </div>
            <div>
                <Button success rounded outline>
                    Success
                </Button>
            </div>
            <div>
                <Button warning rounded outline>
                    Warning
                </Button>
            </div>
            <div>
                <Button danger rounded outline>
                    Danger
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
