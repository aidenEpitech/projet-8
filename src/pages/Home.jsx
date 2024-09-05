import Banner from "./components/Banner.jsx";
import Card from "./components/Card.jsx"
import homeBannerImage from "../assets/img/img-source-1.png"
import {useEffect, useState} from "react";
import logements from "../data/logements.json"

const Home = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        setCard(logements);
    })

    return (
        <div>
            <Banner
                imageSrc={homeBannerImage}
                text="Chez vous, partout et ailleurs"
            />
            <div className="container mx-auto py-8">
                {/* Conteneur global avec fond gris clair */}
                <div className="bg-gray-100 p-10 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                        {card.map((card) => (
                            <Card
                                key={card.id}
                                title={card.title}
                                cover={card.cover}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
