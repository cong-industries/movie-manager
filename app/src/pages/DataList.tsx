import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Film } from '../Interfaces/Film'; // Stellen Sie sicher, dass der Pfad korrekt ist

const DataList = () => {
  const [data, setData] = useState<Film[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/filme')
      .then(response => response.json())
      .then((data: Film[]) => setData(data))
      .catch(error => console.error("Fehler beim Laden der Daten:", error));
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id} // Stellen Sie sicher, dass die ID hier übergeben wird
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
