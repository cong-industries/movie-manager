// src/components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface CardProps {
  id: string;
  name: string;
  imageUrl: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Card = ({ id, name, imageUrl, onDelete, onEdit }: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
        <Button onClick={onDelete} color="#eaa0a7">Löschen</Button>
        <Button onClick={onEdit} color="#c4daf4">Bearbeiten</Button>
        <Link to={`/detail/${id}`}>Details</Link> 
      </div>
    </div>
  );
};

export default Card;
