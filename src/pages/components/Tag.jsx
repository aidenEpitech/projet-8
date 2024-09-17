const Tag = ({ label }) => {
    return (
        <span className="bg-red-400 text-white text-xs font-semibold px-2 py-1 rounded-[10px] mr-2 mb-2 sm:px-6">
            {label} {/* Affiche le label du tag */}
        </span>
    );
};

export default Tag;
