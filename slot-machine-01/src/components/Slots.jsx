function Slots({ val1, val2, val3 }) {
    return (
        <>
            <div className="flex justify-between">
                <h1>{val1} {val2} {val3}</h1>      </div>

            <div>
                {val1 === val2 && val2 === val3 ? (
                    <h1>You Win!</h1>
                ) : (
                    <h1>You lose!</h1>
                )}
            </div>

            <div>
                {val1 === val2 && val2 === val3 ? (
                    <h2>Congrats!</h2>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default Slots;
