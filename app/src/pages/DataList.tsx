import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import EditModal from "../components/EditModal.tsx";
import { Film } from '../Interfaces/Film';
import logo from '../assets/logo.png'
import Button from "../components/Button.tsx";
import AddModal from "../components/AddModal.tsx";

const DataList = () => {
    const [isModalShown, setModalShown] = useState(false);
    const [isAddModalShown, setisAddModalShown] = useState(false);
    const [data, setData] = useState<Film[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalData, setModalData] = useState(
        {
            id: "",
            name: "",
            imageUrl: "",
            genre: "",
            description: "",
            regisseur: "",
            bewertung: 0
        }
    )

    const [addModalData, setaddModalData] = useState(
        {
            id: "",
            name: "",
            imageUrl: "",
            genre: "",
            description: "",
            regisseur: "",
            bewertung: 0
        }
    )

    useEffect(() => {
        fetch('http://localhost:3000/filme')
            .then(response => response.json())
            .then((data: Film[]) => setData(data))
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    }, []);
    const handleUpdate = async (updatedFilm: Film) => {
        try {
            await fetch(`http://localhost:3000/filme/${updatedFilm.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFilm)
            });

            // Direktes Aktualisieren des Zustands ohne erneuten Fetch
            setData(data.map(film => film.id === updatedFilm.id ? updatedFilm : film));
        } catch (error) {
            console.error("Fehler beim Aktualisieren der Daten:", error);
        }
    };

    const submitEditModal = (filmId: string, name: string, imageLink: string, genre: string, description: string, reggiseur: string, bewertung: number) => {
        (async () => {
            // PUT request
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "id": filmId,
                    "image": imageLink,
                    "name": name,
                    "genre": genre,
                    "beschreibung": description,
                    "reggiseur": reggiseur,
                    "bewertung": bewertung
                })
            };
            await fetch('http://localhost:3000/filme/' + filmId, requestOptions).then(() => {
                // UPDATE datalist
                fetch('http://localhost:3000/filme')
                    .then(response => response.json())
                    .then((data: Film[]) => setData(data))
                    .catch(error => console.error("Fehler beim Laden der Daten:", error));
            });
        })();
    }

    const createCard = (name, imageLink, genre, description, reggiseur, bewertung) => {
        (async () => {
            await (async () => {
                // POST request
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "id": Math.floor(Math.random() * 10000) + "",
                        "image": imageLink,
                        "name": name,
                        "genre": genre,
                        "beschreibung": description,
                        "reggiseur": reggiseur,
                        "bewertung": bewertung
                    })
                };
                await fetch('http://localhost:3000/filme', requestOptions).then(() => {
                    // UPDATE datalist
                    fetch('http://localhost:3000/filme')
                        .then(response => response.json())
                        .then((data: Film[]) => setData(data))
                        .catch(error => console.error("Fehler beim Laden der Daten:", error));
                });
            })();
        })();
    }
    const deleteCard = (filmId: string) => {
        (async () => {
            // DELETE request
            await fetch('http://localhost:3000/filme/' + filmId, { method: 'DELETE' }).then(() => {
                // UPDATE datalist
                fetch('http://localhost:3000/filme')
                    .then(response => response.json())
                    .then((data: Film[]) => setData(data))
                    .catch(error => console.error("Fehler beim Laden der Daten:", error));
            });
        })();
    }

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
                <Button onClick={() => {
                    setisAddModalShown(true)
                }} color="#8CD57A">Hinzufügen</Button>
            </div>

            {data.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.reggiseur.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((item) => (
                console.log(item),
                <Card
                    key={item.id}
                    id={item.id} // Stellen Sie sicher, dass die ID hier übergeben wird
                    name={item.name}
                    imageUrl={item.image}
                    beschreibung={item.beschreibung}
                    genre={item.genre}
                    reggiseur={item.reggiseur}
                    bewertung={item.bewertung}
                    onDelete={() => deleteCard(item.id)}
                    openEditModal={setModalShown}
                    fillEditModal={setModalData}
                />
            ))}

            {isModalShown ? (
                <EditModal
                    closeModal={() => {
                        setModalShown(false)
                    }}
                    submitEditModal={submitEditModal}
                    modalData={modalData}
                />
            ) : null}

            {isAddModalShown ? (
                <AddModal
                    closeModal={() => {
                        setisAddModalShown(false)
                    }}
                    submitAddModal={createCard}
                    addModalData={addModalData}
                />
            ) : null}
        </div>
    );
};

export default DataList;
