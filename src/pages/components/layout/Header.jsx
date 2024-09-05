import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className={"bg-white p-4"}>
            <div className={"container mx-auto flex justify-between items-center"}>
                <div>
                    <img src={logo} alt={"Kasa Logo"} className={"h-12"} />
                </div>
                <nav>
                    <ul className={"flex space-x-6"}>
                        <li>
                            <Link to="/" className={"text-black hover:underline"}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={"text-black hover:underline"}>
                                A Propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;
