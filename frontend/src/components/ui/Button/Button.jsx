import React from 'react';
import './Button.css';

const Button = ({ name, onClick, type = "button", className = "" }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            type={type}
        >
            {name}
        </button>
    );
};

export default Button;