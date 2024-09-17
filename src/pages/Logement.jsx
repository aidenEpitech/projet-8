import {Navigate, useParams} from "react-router-dom";
import logements from '../data/logements.json';
import Slideshow from './components/Slideshow';
import Tag from './components/Tag';
import Rating from './components/Rating';
import Collapse from './components/Collapse';

const Logement = () => {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/404"/>;
    }

    return (
        <div className="container mx-auto py-8">
            <Slideshow pictures={logement.pictures}/>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <h1 className="text-2xl text-red-400">{logement.title}</h1>
                    <p className="text-gray-600">{logement.location}</p>
                </div>

                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="text-red-400 text-right">
                            {logement.host.name.split(' ')[0]} <br/>
                            {logement.host.name.split(' ')[1]}
                        </p>
                    </div>
                    <img
                        src={logement.host.picture}
                        alt={logement.host.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex flex-wrap">
                    {logement.tags.map((tag, index) => (
                        <Tag key={index} label={tag}/>
                    ))}
                </div>
                <div>
                    <Rating rating={parseInt(logement.rating)}/>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="w-[45%]">
                    <Collapse label="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                </div>
                <div className="w-[45%]">
                    <Collapse label="Équipements">
                        <ul className="list-disc ml-4">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Logement;
