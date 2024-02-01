// src/components/Card.tsx
import React from 'react';
import Button from './button';
import Link from './Link';

interface CardProps {
  name: string;
  imageUrl: string; // Stellt sicher, dass dies mit dem Interface übereinstimmt
  onDelete: () => void;
  onEdit: () => void;
}

const Card = ({ name, imageUrl, onDelete, onEdit }: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <Button onClick={onDelete} color="red">Löschen</Button>
      <Button onClick={onEdit} color="blue">Bearbeiten</Button>
      <Link to={`/detail/${name}`}>Details</Link> {/* Annahme: URL verwendet den Namen, könnte auch ID verwenden */}
        </div>
    </div>
  );
};

export default Card;
