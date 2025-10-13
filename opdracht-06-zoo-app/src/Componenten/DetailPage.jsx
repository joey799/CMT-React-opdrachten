// src/Componenten/DetailPage.jsx
import { useParams } from 'react-router-dom';
import animals from './animals';


const DetailPage = () => {
    const { id } = useParams();
    const animal = animals.find(animal => animal.id === parseInt(id));

    if (!animal) {
        return <h1>Dier niet gevonden</h1>;
    }

    return (
        <div className="detail-page">
            <button onClick={() => window.history.back()}>← Terug</button>
            <div className="animal-detail">
                <img src={animal.image} alt={animal.name} />
                <div className="animal-info">
                    <h1>{animal.name}</h1>
                    <p><strong>Leefgebied:</strong> {animal.habitat}</p>
                    <p><strong>Dieet:</strong> {animal.diet}</p>
                    <p><strong>Beschrijving:</strong> {animal.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;