import React, { useState, useEffect } from "react";
import { getData } from "../../services/swDataHandler";

const Starships = () => {
    const [currentId, setCurrentId] = useState(1);
    const [starship, setStarship] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(currentId, 'starships').then(data => {
            setStarship(data);
            setLoading(false);
        });
    }, [currentId]);

    return (
        <div>
            <button onClick={() => setCurrentId(id => id + 1)}>Next</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>{starship.error ? starship.error : starship.name}</h3>
                    {!starship.error && (
                        <ul>
                            <li>Model: {starship.model}</li>
                            <li>Manufacturer: {starship.manufacturer}</li>
                            <li>Cost: {starship.cost_in_credits} credits</li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default Starships;