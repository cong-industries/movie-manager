// src/components/Card.tsx
import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

interface CardProps {
    id: string;
    name: string;
    imageUrl: string;
    beschreibung: string;
    genre: string;
    onDelete: () => void;
    openEditModal: (show: boolean) => void;
    fillEditModal: (data: { id: string; name: string; imageUrl: string; genre: string; description: string; }) => void;
}

const Card = ({id, name, imageUrl, beschreibung, genre, onDelete, openEditModal, fillEditModal}: CardProps) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{name}</h3>

                <div className="card__inner">
                    <div className="card__imageWrapper">
                        <Link className="card__detailsButton" to={`/detail/${id}`}>
                            <img src={imageUrl} alt={name}/>
                        </Link>
                    </div>
                    <div className="card__details">
                        <Link className="card__detailsButton" to={`/detail/${id}`}>
                            <Button onClick={() => {
                            }} color="#BABABA">Details</Button>
                        </Link>
                        <Button onClick={() => {
                            fillEditModal({
                                id: id,
                                name: name,
                                imageUrl: imageUrl,
                                genre: genre,
                                description: beschreibung
                            });

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
