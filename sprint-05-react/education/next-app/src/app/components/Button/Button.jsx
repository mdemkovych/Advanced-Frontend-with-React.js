'use client';

import PropTypes from 'prop-types';

export default function Button({ name, onClick }) {
    return (
        <button onClick={onClick}>
            {name}
        </button>
    );
}

Button.propTypes = {
    name:    PropTypes.string.isRequired,
    onClick: PropTypes.func
};