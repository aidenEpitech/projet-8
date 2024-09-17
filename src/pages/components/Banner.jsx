const Banner = ({ imageSrc, text }) => {
    return (
        <div
            className="relative rounded-lg shadow-lg overflow-hidden h-32 sm:h-64"
            style={{
                backgroundImage: `url(${imageSrc})`, // Définit l'image de fond
                backgroundSize: 'cover', // Couvre tout le conteneur
                backgroundPosition: 'center', // Centre l'image
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start sm:justify-center px-4 sm:px-0">
                {text && (
                    <h1 className="text-white text-xl sm:text-4xl font-bold">
                        <span className="block sm:inline">{text.split(',')[0]},</span> {/* Split à la virgule pour la homepage */}
                        <span className="block sm:inline"> {text.split(',')[1]}</span> {/* Deuxième segment du texte */}
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Banner;
