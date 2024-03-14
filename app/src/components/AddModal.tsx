// src/components/Card.tsx
import React, {useState} from 'react';
import Button from './Button';

const AddModal = ({closeModal, submitAddModal, addModalData}) => {
    const [newName, setnewName] = useState(addModalData.name)
    const [newImageUrl, setNewImageUrl] = useState(addModalData.imageUrl)
    const [newGenre, setNewGenre] = useState(addModalData.genre)
    const [newDescription, setNewDescription] = useState(addModalData.description)

    return (
        <div className="editModal">
            <div className="card__editForm">
                <div className="modalHeader">Neuer Film:</div>

                <div>
                    <div className="inputWrapper">
                        <label htmlFor="newName">Name</label>
                        <input name="newName" defaultValue={newName} onChange={value => setnewName(value.target.value)}/>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="newImageurl">Bildurl</label>
                        <input name="newImageurl" defaultValue={newImageUrl} onChange={value => setNewImageUrl(value.target.value)}/>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="newGenre">Genre</label>
                        <input name="newGenre" defaultValue={newGenre} onChange={value => setNewGenre(value.target.value)}/>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="newDescription">Beschreibung</label>
                        <input name="newDescription" defaultValue={newDescription} onChange={value => setNewDescription(value.target.value)}/>
                    </div>
                </div>

                <Button onClick={() => {
                    submitAddModal(addModalData.id, newName, newImageUrl, newGenre, newDescription)
                    closeModal()
                }} color="#8CD57A">Hinzufügen</Button>
            </div>
        </div>
    );
};

export default AddModal;
