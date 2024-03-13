import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import EditModal from "../components/EditModal.tsx";
import {Film} from '../Interfaces/Film';
import Button from "../components/Button.tsx"; // Stellen Sie sicher, dass der Pfad korrekt ist

const DataList = () => {
    const [isModalShown, setModalShown] = useState(false);
    const [data, setData] = useState<Film[]>([]);

    const [modalData, setModalData] = useState(
        {
            id: "testid",
            name: "testname",
            imageUrl: "testimageurl",
            genre: "testgenre",
            description: "testdesc"
        }
    )

    useEffect(() => {
        fetch('http://localhost:3000/filme')
            .then(response => response.json())
            .then((data: Film[]) => setData(data))
            .catch(error => console.error("Fehler beim Laden der Daten:", error));

    }, []);

    // const submitEditModal = (filmId: string, imageLink, name, genre, description) => {
    // (async () => {
    //     // PUT request using fetch with async/await
    //
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             "id": filmId,
    //             "image": imageLink,
    //             "name": name,
    //             "genre": genre,
    //             "beschreibung": description
    //         })
    //     };
    //     const response = await fetch('http://localhost:3000/filme/' + filmId, requestOptions);
    //     const data = await response.json().then(() => {
    //         console.log(data)
    //     });
    // })();
    // }


    const deleteCard = (filmId: string) => {
        (async () => {
            // DELETE request
            await fetch('http://localhost:3000/filme/' + filmId, {method: 'DELETE'}).then(() => {
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
            {data.map((item) => (
                <Card
                    key={item.id}
                    id={item.id} // Stellen Sie sicher, dass die ID hier übergeben wird
                    name={item.name}
                    imageUrl={item.image}
                    beschreibung={item.beschreibung}
                    genre={item.genre}
                    onDelete={() => deleteCard(item.id)}
                    openEditModal={setModalShown}
                    fillEditModal={setModalData}
                />
            ))}


            {isModalShown ? (
                <EditModal
                    submitEditModal={() => {setModalShown(false)}}
                    modalData={modalData}
                />
            ) : null}
        </div>
    );
};

export default DataList;
