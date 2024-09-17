import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/logement/${id}`} className="block"> {/* Lien vers la page de logement avec ID dynamique */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <img
                    src={cover}
                    alt={title} // Texte alternatif pour l'image
                    className="absolute inset-0 w-full h-full object-cover" // Couvre le conteneur
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                    <h2 className="text-white text-sm font-semibold">{title}</h2> {/* Titre de la carte */}
                </div>
            </div>
        </Link>
    );
};

export default Card;
