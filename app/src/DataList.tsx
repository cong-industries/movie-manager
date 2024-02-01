// src/pages/DataList.tsx
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Film } from './Film'; // Pfad anpassen

const DataList = () => {
  const [data, setData] = useState<Film[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/filme')
      .then((response) => response.json())
      .then((data: Film[]) => setData(data))
      .catch((error) => console.error("Fehler beim Laden der Daten:", error));
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          imageUrl={item.image}
          onDelete={() => console.log('Löschen', item.id)}
          onEdit={() => console.log('Bearbeiten', item.id)}
        />
      ))}
    </div>
  );
};

export default DataList;
