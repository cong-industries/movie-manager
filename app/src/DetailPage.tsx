// src/pages/DetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/filme/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Fehler beim Laden des Details:", error));
  }, [id]);

  if (!item) return <div>Lädt...</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      {/* Weitere Details hier anzeigen */}
    </div>
  );
};

export default DetailPage;
