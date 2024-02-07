// src/pages/DetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Film } from '../Interfaces/Film'; // Stellen Sie sicher, dass der Pfad korrekt ist
import '../DetailPageStyle.css'; 

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Film | null>(null);

  useEffect(() => {
    // Stellen Sie sicher, dass die URL und der Endpunkt korrekt sind
    fetch(`http://localhost:3000/filme/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Fehler beim Laden des Details:", error));
  }, [id]);

  if (!item) return <div>Lädt...</div>;

  return (
<div className="detail-container">
  <h2 className="detail-title">{item.name}</h2>
  <img src={item.image} alt={item.name} />
  <p className="detail-genre">Genre: {item.genre}</p>
  <p className="detail-description">Beschreibung: {item.beschreibung}</p>
  <Link to="/" className="back-link">Zurück zur Liste</Link>
</div>

  );
};

export default DetailPage;
