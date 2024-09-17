import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className="bg-white p-4"> {/* Header avec fond blanc et padding */}
            <div className="container mx-auto flex justify-between items-center"> {/* Conteneur centré avec flexbox pour espacer les éléments */}
                <div>
                    <Link to="/">
                        <img src={logo} alt="Kasa Logo" className="h-8 sm:h-12" /> {/* Logo centré avec différentes hauteurs selon la taille de l'écran */}
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-4 sm:space-x-6"> {/* Liste d'éléments de navigation avec espacement */}
                        <li>
                            <Link to="/" className="text-sm sm:text-base text-black hover:underline"> {/* Style underline si clique */}
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-sm sm:text-base text-black hover:underline"> {/* Style underline si clique */}
                                A Propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; // Exportation du composant Header
