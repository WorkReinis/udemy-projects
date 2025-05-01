import { FaRegStar } from "react-icons/fa";

function Property({ name, price, rating, id }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>
                {rating} <FaRegStar />
            </h4>
        </div>
    );
}

export default Property;
