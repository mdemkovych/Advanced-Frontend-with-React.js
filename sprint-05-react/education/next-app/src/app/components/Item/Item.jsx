'use client';

import PropTypes from 'prop-types';
import {useState} from "react";


export default function Item({ num }) {
    const [active, setActive] = useState(false);
    return (
        <li style={{ backgroundColor: active ? "green" : "transparent" }}
            onClick={() => {
                setActive(!active);
            }}>
            <span>{num}</span>
        </li>
    );
}

Item.propTypes = {
    num: PropTypes.number.isRequired,
};