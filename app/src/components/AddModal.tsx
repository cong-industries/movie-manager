import React, { useState } from 'react';
import Button from './Button';

const AddModal = ({ closeModal, submitAddModal, addModalData }) => {
    const [newName, setNewName] = useState(addModalData.name);
    const [newImageUrl, setNewImageUrl] = useState(addModalData.imageUrl);
    const [newGenre, setNewGenre] = useState(addModalData.genre);
    const [newDescription, setNewDescription] = useState(addModalData.description);
    const [newRegisseur, setNewRegisseur] = useState(addModalData.regisseur);
    const [newRating, setNewRating] = useState(addModalData.rating || 1); // Default-Wert auf 1 setzen, falls kein Rating vorhanden ist

    return (
        <div className="editModal">
            <div className="card__editForm">
                <div className="modalHeader">Neuer Film:</div>

                <div>
                    <div className="inputWrapper">
                        <label htmlFor="newName">Name</label>
                        <input id="newName" value={newName} onChange={e => setNewName(e.target.value)} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="newImageurl">Bildurl</label>
                        <input id="newImageurl" value={newImageUrl} onChange={e => setNewImageUrl(e.target.value)} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="newGenre">Genre</label>
                        <input id="newGenre" value={newGenre} onChange={e => setNewGenre(e.target.value)} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="newDescription">Beschreibung</label>
                        <input id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="newRegisseur">Regisseur</label>
                        <input id="newRegisseur" value={newRegisseur} onChange={e => setNewRegisseur(e.target.value)} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="newRating">Rating</label>
                        <input id="newRating" type="number" min="1" max="5" value={newRating} onChange={e => setNewRating(Number(e.target.value))} />
                    </div>

                    <Button onClick={() => {
                        // Stellen Sie sicher, dass alle notwendigen Daten übergeben werden, einschließlich des neuen Ratings
                        submitAddModal(newName, newImageUrl, newGenre, newDescription, newRegisseur, newRating);
                        closeModal();
                    }} color="#8CD57A">Hinzufügen</Button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
