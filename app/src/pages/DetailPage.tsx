// src/pages/DetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Film } from '../Interfaces/Film'; // Stellen Sie sicher, dass der Pfad korrekt ist
import '../DetailPageStyle.css';
import Button from "../components/Button.tsx";

const DetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Film | null>(null);

    useEffect(() => {
        // Stellen Sie sicher, dass die URL und der Endpunkt korrekt sind
        fetch(`http://localhost:3000/filme/${id}`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => console.error("Fehler beim Laden des Details:", error));
    }, [id]);

    if (!item) return <div>Lädt...</div>;

    return (
        <div className="detail-container">
            <div className="detail__inner">
                <h2 className="detail-title">{item.name}</h2>
                <img src={item.image} alt={item.name} />
                <p className="detail-genre"><b>Genre:</b> {item.genre}</p>
                <p className="detail-description"><b>Beschreibung:</b> {item.beschreibung}</p>
                <Link to="/" className="back-link">
                    <Button onClick={() => { }} color="#BABABA"> Zurück zur Liste</Button>
                </Link>
            </div>
        </div>

    )
        ;
};

export default DetailPage;
