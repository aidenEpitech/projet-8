const Card = ({ title, cover }) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg w-full pb-[100%]">
            {/* Image de couverture qui prend toute la place */}
            <img
                src={cover}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Titre en blanc, en bas à gauche */}
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <h2 className="text-white text-sm font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default Card;
