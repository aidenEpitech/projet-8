import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false); // État pour savoir si le collapse est ouvert ou non
    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Inverse l'état
    };

    return (
        <div className="rounded-lg overflow-hidden my-2">
            <button
                className="rounded bg-red-400 text-white font-semibold p-2 sm:p-3 flex justify-between items-center w-full text-sm sm:text-base"
                onClick={toggleCollapse} // Fonction de toggle sur clic
            >
                <span>{label}</span> {/* Label du collapse */}
                <span
                    className={`ml-4 transform transition-transform duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`}>
                    <FontAwesomeIcon
                        icon={faChevronUp} // Icône de flèche
                        className="h-5 w-5 sm:h-6 sm:w-6 text-white" // Taille et couleur de l'icône
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    />
                </span>
            </button>
            <div
                className={`transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden`}>
                <div className="p-3 bg-gray-100 ">
                    {children} {/* Contenu enfant affiché quand ouvert */}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
