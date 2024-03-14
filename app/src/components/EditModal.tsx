// src/components/Card.tsx
import React, {useState} from 'react';
import Button from './Button';

const EditModal = ({closeModal, submitEditModal, modalData}) => {
    const [newName, setnewName] = useState(modalData.name)
    const [newImageUrl, setNewImageUrl] = useState(modalData.imageUrl)
    const [newGenre, setNewGenre] = useState(modalData.genre)
    const [newDescription, setNewDescription] = useState(modalData.description)

    return (
        <div className="editModal">
            <div className="card__editForm">
                <div className="modalHeader">Bearbeiten:</div>

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
                    submitEditModal(modalData.id, newName, newImageUrl, newGenre, newDescription)
                    closeModal()
                }} color="#c4daf4">Bearbeiten</Button>
            </div>
        </div>
    );
};

export default EditModal;
