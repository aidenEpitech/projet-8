import { Navigate, useParams } from "react-router-dom";
import logements from '../data/logements.json';
import Slideshow from './components/Slideshow';
import Tag from './components/Tag';
import Rating from './components/Rating';
import Collapse from './components/Collapse';

const Logement = () => {
    const { id } = useParams(); // Récupération de l'ID depuis les paramètres de l'URL
    const logement = logements.find((logement) => logement.id === id); // Recherche du logement par ID

    if (!logement) {
        return <Navigate to="/404" />; // Redirection si le logement n'est pas trouvé
    }

    return (
        <div className="container mx-auto py-8">
            <Slideshow pictures={logement.pictures} />

            {/* Conteneur du titre, localisation, tags, rating, et hôte */}
            <div className="mt-4">
                {/* Titre avec taille réduite en mobile */}
                <h1 className="text-xl sm:text-2xl text-red-400">{logement.title}</h1>
                <p className="text-gray-600">{logement.location}</p>
                <div className="flex flex-wrap mt-2">
                    {logement.tags.map((tag, index) => (
                        <Tag key={index} label={tag} /> // Affichage des tags
                    ))}
                </div>

                {/* Rating et hôte alignés en mobile */}
                <div className="flex justify-between items-center mt-2">
                    <Rating rating={parseInt(logement.rating)} /> {/* Affichage de la note */}
                    <div className="flex items-center">
                        <div className="mr-2 text-right">
                            <p className="text-red-400">
                                {logement.host.name.split(' ')[0]} <br />
                                {logement.host.name.split(' ')[1]} {/* Nom de l'hôte */}
                            </p>
                        </div>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="w-12 h-12 rounded-full object-cover" // Style de l'image de l'hote
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-4">
                <div className="w-full sm:w-[45%]">
                    <Collapse label="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                </div>
                <div className="w-full sm:w-[45%] mt-4 sm:mt-0">
                    <Collapse label="Équipements">
                        <ul className="list-disc ml-4">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li> // Affichage des équipements
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Logement;
