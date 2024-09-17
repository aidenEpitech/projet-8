import { useState } from "react";

const Slideshow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle
    const [isAnimating, setIsAnimating] = useState(false); // État pour gérer l'animation

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true); // Démarre l'animation
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Passe à l'image suivante
            setTimeout(() => setIsAnimating(false), 500); // Réinitialise l'animation après 500ms
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true); // Démarre l'animation
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? pictures.length - 1 : prevIndex - 1 // Retourne à la dernière image si on est au début
            );
            setTimeout(() => setIsAnimating(false), 500); // Réinitialise l'animation après 500ms
        }
    };

    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg h-64 sm:h-96">
            {/* Taille ajustée pour un aspect plus carré sur mobile */}
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`, // Déplace les images selon l'index actuel
                    }}
                >
                    {pictures.map((picture, index) => (
                        <img
                            key={index} // Clé unique pour chaque image
                            src={picture}
                            alt={`Slide ${index + 1}`} // Texte alternatif pour l'image
                            className="absolute w-full h-full object-cover" // Couvre le conteneur
                            style={{ left: `${index * 100}%` }} // Positionne chaque image
                        />
                    ))}
                </div>
            </div>
            {pictures.length > 1 && ( // Fèche seulement si image > à 1
                <>
                    {/* Taille des flèches réduite pour mobile */}
                    <button
                        onClick={handlePrev} // Gère le clic sur la flèche précédente
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-[3rem] sm:text-[6rem] font-bold"
                    >
                        &#10094; {/* Flèche gauche */}
                    </button>
                    <button
                        onClick={handleNext} // Gère le clic sur la flèche suivante
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-[3rem] sm:text-[6rem] font-bold"
                    >
                        &#10095; {/* Flèche droite */}
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base">
                        {currentIndex + 1}/{pictures.length} {/* Indicateur de la position actuelle */}
                    </div>
                </>
            )}
        </div>
    );
};

export default Slideshow;
