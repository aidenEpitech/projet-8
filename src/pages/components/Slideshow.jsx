import {useState} from "react";

const Slideshow = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };
    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
            );
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {pictures.map((picture, index) => (
                        <img
                            key={index}
                            src={picture}
                            alt={`Slide ${index + 1}`}
                            className="absolute w-full h-full object-cover"
                            style={{left: `${index * 100}%`}}
                        />
                    ))}
                </div>
            </div>
            {pictures.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-[6rem] font-bold"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-[6rem] font-bold"
                    >
                        &#10095;
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default Slideshow;
