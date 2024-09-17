const Banner = ({imageSrc, text}) => {

    return (
        <div
            className="relative rounded-lg shadow-lg overflow-hidden h-64"
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {text && (
                    <h1 className="text-white text-4xl font-bold">{text}</h1>
                )}
            </div>
        </div>
    );
};

export default Banner;
