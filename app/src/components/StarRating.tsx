import React, { useState, useEffect } from 'react';

interface StarRatingProps {
    initialRating: number;
    onRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, onRating }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    // Stellt sicher, dass die Komponente die initiale Bewertung korrekt anzeigt,
    // auch wenn sie nachträglich ändert.
    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    return (
        <div className="star-rating" aria-label="Bewerte diesen Film">
            {[...Array(5)].map((_, index) => {
                const rateValue = index + 1;
                return (
                    <button
                        type="button"
                        key={rateValue}
                        className={rateValue <= (hover || rating) ? "on" : "off"}
                        onClick={() => {
                            setRating(rateValue);
                            onRating(rateValue);
                        }}
                        onMouseEnter={() => setHover(rateValue)}
                        onMouseLeave={() => setHover(rating)}
                        aria-label={`${rateValue} Sterne`}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
