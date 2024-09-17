import Banner from "./components/Banner.jsx";
import Card from "./components/Card.jsx";
import homeBannerImage from "../assets/img/img-source-1.png";
import { useEffect, useState } from "react";
import logements from "../data/logements.json";

const Home = () => {
  const [card, setCard] = useState([]); // État pour stocker les cartes

  useEffect(() => {
    setCard(logements); // Met à jour l'état avec les logements
  }, []);

  return (
    <div>
      <Banner
        imageSrc={homeBannerImage}
        text="Chez vous, partout et ailleurs"
      />
      <div className="container mx-auto py-8">
        {/* Le fond blanc devient gris sur desktop, et les marges internes sont supprimées sur mobile */}
        <div className="bg-white sm:bg-gray-100 sm:p-10 rounded-lg">
          {/* Les cartes prennent toute la largeur sur mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
            {card.map((cardItem) => (
              <Card
                key={cardItem.id}
                id={cardItem.id}
                title={cardItem.title}
                cover={cardItem.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
