import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import EditModal from "../components/EditModal.tsx";
import { Film } from '../Interfaces/Film';
import logo from '../assets/logo.png';
import Button from "../components/Button.tsx";
import AddModal from "../components/AddModal.tsx";

const DataList = () => {
    const [isModalShown, setModalShown] = useState(false);
    const [isAddModalShown, setisAddModalShown] = useState(false);
    const [data, setData] = useState<Film[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalData, setModalData] = useState({ id: "", name: "", imageUrl: "", genre: "", description: "" });
    const [addModalData, setaddModalData] = useState({ id: "", name: "", imageUrl: "", genre: "", description: "" });

    useEffect(() => {
        fetch('http://localhost:3000/filme')
            .then(response => response.json())
            .then((data: Film[]) => setData(data))
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    }, []);

    // Funktionen submitEditModal, createCard und deleteCard bleiben gleich

    return (
        <div className="container">
            <img src={logo} className="logo" alt="Movie Manager Logo" />

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Nach Filmen suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="navi">
                <Button onClick={() => setisAddModalShown(true)} color="#8CD57A">Hinzufügen</Button>
            </div>

            {data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageUrl={item.image}
                    beschreibung={item.beschreibung}
                    genre={item.genre}
                    onDelete={() => deleteCard(item.id)}
                    openEditModal={() => {
                        setModalData(item);
                        setModalShown(true);
                    }}
                />
            ))}

            {isModalShown && (
                <EditModal
                    closeModal={() => setModalShown(false)}
                    submitEditModal={submitEditModal}
                    modalData={modalData}
                />
            )}

            {isAddModalShown && (
                <AddModal
                    closeModal={() => setisAddModalShown(false)}
                    submitAddModal={createCard}
                    addModalData={addModalData}
                />
            )}
        </div>
    );
};

export default DataList;
