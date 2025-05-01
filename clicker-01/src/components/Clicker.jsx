function Clicker({ message, buttonText }) {
    const handleClick = (e) => {
        alert(message);
    }

    return (
        <>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    )
}

export default Clicker;