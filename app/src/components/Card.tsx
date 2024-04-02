import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import StarRating from './StarRating';

interface CardProps {
    id: string;
    name: string;
    imageUrl: string;
    beschreibung: string;
    genre: string;
    reggiseur: string;
    bewertung: number;
    onDelete: () => void;
    openEditModal: (show: boolean) => void;
    fillEditModal: (data: { id: string; name: string; imageUrl: string; genre: string; description: string; reggiseur: string, bewertung: number }) => void;
}

const Card = ({id, name, imageUrl, beschreibung, genre, reggiseur, bewertung, onDelete, openEditModal, fillEditModal}: CardProps) => {
    // Nutzen Sie den state, um die aktuelle Bewertung zu speichern
    const [currentRating, setCurrentRating] = useState(bewertung);

    const handleRatingChange = (newRating: number) => {
        // PATCH-Anfrage, um die Bewertung zu aktualisieren
        fetch(`http://localhost:3000/filme/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({bewertung: newRating}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(updatedItem => {
                setCurrentRating(updatedItem.bewertung); // Aktualisieren Sie den Zustand mit der neuen Bewertung
                console.log('Bewertung erfolgreich aktualisiert');
            })
            .catch(error => console.error("Fehler beim Aktualisieren der Bewertung:", error));
    };

    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <StarRating initialRating={currentRating} onRating={handleRatingChange}/>
                <div className="card__inner">
                    <div className="card__imageWrapper">
                        <Link to={`/detail/${id}`}>
                            <img src={imageUrl} alt={name}/>
                        </Link>
                    </div>
                    <div className="card__details">
                        <Link to={`/detail/${id}`}>
                            <Button color="#BABABA">Details</Button>
                        </Link>
                        <Button onClick={() => {
                            fillEditModal({id, name, imageUrl, genre, description: beschreibung, reggiseur, bewertung: currentRating})
                            openEditModal(true);
                        }} color="#c4daf4">Bearbeiten</Button>
                        <Button onClick={onDelete} color="#eaa0a7">Löschen</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
