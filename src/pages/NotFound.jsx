import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh] bg-white text-center"> {/* Conteneur centré avec hauteur ajustée */}
            <h1 className="text-9xl font-bold text-red-400">404</h1>
            <p className="text-xl text-red-400 mt-4">
                Oups! La page que <span className="block sm:inline"> vous demandez n'existe pas.</span> {/* Retour après "que" en version mobile */}
            </p>
            <Link to="/" className="mt-6 text-sm text-gray-500 underline hover:text-gray-700">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
};

export default NotFound;
