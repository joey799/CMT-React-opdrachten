// src/Componenten/HomePage.jsx
import React from 'react';
import Card from './Card';
import animals from './animals';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welkom bij de Dierentuin</h1>
            <div className="animals-grid">
                {animals.map((animal) => (
                    <Card key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;