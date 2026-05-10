import React, { useState, useEffect } from "react";
import { getData } from "../../services/swDataHandler";

const People = () => {
    const [currentId, setCurrentId] = useState(1);
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    // const imageUrl = `https://react-10-ajax.github.io/star-wars-visualguide/characters/${currentId}.jpg`;

    // async / await style (for ex in Planets or Starships simple Promise)
    useEffect(() => {
        const fetchPerson = async () => {
            setLoading(true);
            const data = await getData(currentId, 'people');
            setPerson(data);
            setLoading(false);
        };
        fetchPerson();
    }, [currentId]);

    return (
        <div>
            <button onClick={() => setCurrentId(id => id + 1)}>Next</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>{person.name}</h3>
                    <ul>
                        <li>Gender: {person.gender}</li>
                        <li>Birth Year: {person.birth_year}</li>
                        <li>Eye Color: {person.eye_color}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default People;