// src/components/Card.tsx
import React from 'react';
import Button from './Button';

const EditModal = ({submitEditModal, modalData}) => {

    return (
        <div className="editModal">
            
            <div className="card__editForm">
                <div>Bearbeiten: </div>

                <div>
                    <div>
                        <label htmlFor="newName">Name</label>
                        <input name="newName" defaultValue={modalData.name}/>
                    </div>

                    <div>
                        <label htmlFor="newImageurl">Bildurl</label>
                        <input name="newImageurl" defaultValue={modalData.imageUrl}/>
                    </div>

                    <div>
                        <label htmlFor="newGenre">Genre</label>
                        <input name="newGenre" defaultValue={modalData.genre}/>
                    </div>

                    <div>
                        <label htmlFor="newDescription">Beschreibung</label>
                        <input name="newDescription" defaultValue={modalData.description}/>
                    </div>
                </div>

                <Button onClick={submitEditModal} color="#eaa0a7">Edittt</Button>


            </div>
        </div>
    );
};

export default EditModal;
