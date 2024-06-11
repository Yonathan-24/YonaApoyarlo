// src/PersonCard.js
import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
        <div style={styles.card}>
            <h2>{firstName} {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
};

export default PersonCard;
