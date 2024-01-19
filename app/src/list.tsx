import React from 'react';
import Card from './card'; // Stellen Sie sicher, dass die Card-Komponente korrekt importiert wird

interface Element {
  id: number;
  name: string;
  imageUrl: string;
}

interface ListProps {
  elements: Element[];
}

const list: React.FC<ListProps> = ({ elements }) => {
  return (
    <div>
      {elements.map((element) => (
        <Card
          key={element.id}
          name={element.name}
          imageUrl={element.imageUrl}
          onDeleteClick={() => handleDeleteClick(element.id)}
          onEditClick={() => handleEditClick(element.id)}
        />
      ))}
    </div>
  );
};

const handleDeleteClick = (id: number) => {
  // Platzhalter Löschfunktion
  console.log(`Löschen geklickt für Element mit ID ${id}`);
};

const handleEditClick = (id: number) => {
  // Platzhalter Bearbeitungsfunktion
  console.log(`Bearbeiten geklickt für Element mit ID ${id}`);
};

export default List;