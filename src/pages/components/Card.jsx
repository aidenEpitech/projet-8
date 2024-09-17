import {Link} from 'react-router-dom';

const Card = ({id, title, cover}) => {

    return (
        <Link to={`/logement/${id}`} className="block">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <img
                    src={cover}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                    <h2 className="text-white text-sm font-semibold">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;
