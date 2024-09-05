import Banner from "./components/Banner.jsx";
import homeBannerImage from "../assets/img/img-source-1.png"

const Home = () => {
    return (
        <div>
            <Banner
                imageSrc={homeBannerImage}
                text="Chez vous, partout et ailleurs"
            />

        </div>
    );
};

export default Home;
