import React from 'react';

interface CardProps {
  name: string;
  imageUrl: string;
  onDeleteClick: () => void;
  onEditClick: () => void;
}

const card: React.FC<CardProps> = ({ name, imageUrl, onDeleteClick, onEditClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-buttons">
          <button className="delete-button" onClick={onDeleteClick}>
            Löschen
          </button>
          <button className="edit-button" onClick={onEditClick}>
            Bearbeiten
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;