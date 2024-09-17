import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Collapse = ({label, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded-lg overflow-hidden my-2">
            <button
                className="rounded bg-red-400 text-white font-semibold p-3 flex justify-between items-center w-full"
                onClick={toggleCollapse}
            >
                <span>{label}</span>
                <span
                    className={`ml-4 transform transition-transform duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`}>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="h-6 w-6 text-white"
                        style={{fontSize: "1.5rem", fontWeight: "bold"}}
                    />
                </span>
            </button>
            <div
                className={`transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden`}>
                <div className="p-3 bg-gray-100 ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
