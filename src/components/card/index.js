import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card.css';

// Tableau de résultat reçu depuis App
const ReposResults = ({ results }) => (
    <div className="main-card" >
        {/* Avec le map cela transforme chacun des objets en composant Card */}
        {results.map((item) => (
            <Card
                // I use here the Spread Operator and in the Card file I will choose the information I am interested in
                {...item}
                key={item.id}
            />
        ))}
    </div>
);

ReposResults.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default ReposResults;
