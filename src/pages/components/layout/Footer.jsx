import logo from '../../../assets/logo-white.svg';

const Footer = () => {
    return (
        <footer className={"bg-black text-white py-8"}> {/* Style du footer avec fond noir et texte blanc */}
            <div className={"container mx-auto text-center"}> {/* Conteneur centré avec une largeur maximale */}
                <img src={logo} alt={"Kasa Logo"} className={"mx-auto h-8 mb-4"} /> {/* Logo centré avec une hauteur de 8 et une marge en bas */}
                <p className={"text-sm"}> {/* Paragraphe avec une petite taille de texte */}
                    &copy; 2020 Kasa. All <span className="block sm:inline">rights reserved</span> {/* Mention de copyright */}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
