function PlayerScore({ sendDataToParent, scoreToDisplay, id }) {
    const sendData = () => {
        const data = id
        sendDataToParent(data);
    };

    return (
        <div>
            <li >
                <div>
                    <div>Player: {id}</div>
                    <div>Score: {scoreToDisplay}</div>
                    <button onClick={sendData}>Click</button>
                </div>
            </li>
        </div>
    );
}

export default PlayerScore;
