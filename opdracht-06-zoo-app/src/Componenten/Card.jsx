// src/Componenten/Card.jsx
import { useNavigate } from 'react-router-dom';

const Card = ({ animal }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/animal/${animal.id}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={animal.image} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>{animal.description.substring(0, 100)}...</p>
        </div>
    );
};

export default Card;