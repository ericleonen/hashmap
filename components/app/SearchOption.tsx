import { FaCopy } from "react-icons/fa";

const SearchOption = () => {
    return (
        <div 
            className="relative flex items-center border-2 border-transparent py-2 pl-12 pr-4 text-sm overflow-clip w-[30rem] bg-white/10 pointer-events-auto translate-y-[100%] last:rounded-b-md hover:bg-white/20"
        >
             <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-full hover:text-purple-400/90 group-hover:right-0 text-gray-200/30 group-hover:text-white/70">
                <FaCopy />
            </div>
            Some search option
        </div>
    );
};

export default SearchOption;