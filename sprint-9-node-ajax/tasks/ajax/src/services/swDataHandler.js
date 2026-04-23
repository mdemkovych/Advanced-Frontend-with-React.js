import axios from "axios";

const extractProperties = (properties, entityType) => {
    const {
        name,
        gender,
        birth_year,
        eye_color,
        population,
        orbital_period,
        diameter,
        model,
        manufacturer,
        cost_in_credits
    } = properties;
    switch (entityType) {
        case 'people':
            return {name, gender, birth_year, eye_color};
        case 'planets':
            return {name, population, orbital_period, diameter};
        case 'starships':
            return {name, model, manufacturer, cost_in_credits};
        default:
            return {};
    }
};


export const getData = (entityId, entityType) => {
    return axios.get(`https://swapi.info/api/${entityType}/${entityId}`).then(res => {
        const props = extractProperties(res.data, entityType);
        return {
            ...props
        };
    }).catch(error => {
        return {
            error: 'not available'
        };
    });
}