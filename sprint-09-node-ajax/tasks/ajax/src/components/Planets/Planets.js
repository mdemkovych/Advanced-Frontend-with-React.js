import React, { useState, useEffect } from "react";
import { getData } from "../../services/swDataHandler";

const Planets = () => {
    const [currentId, setCurrentId] = useState(1);
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(currentId, 'planets').then(data => {
            setPlanet(data);
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
                    <h3>{planet.name}</h3>
                    <ul>
                        <li>Population: {planet.population}</li>
                        <li>Orbital Period: {planet.orbital_period}</li>
                        <li>Diameter: {planet.diameter}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Planets;