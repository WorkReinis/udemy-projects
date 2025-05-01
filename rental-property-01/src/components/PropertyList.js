import Property from "./Property";

function PropertyList({ properties }) {
    return (
        <div>
            {properties.map((prop) => (
                <Property
                    name={prop.name}
                    price={prop.price}
                    rating={prop.rating}
                    key={prop.id}
                />
            ))}
        </div>
    );
}

export default PropertyList;
