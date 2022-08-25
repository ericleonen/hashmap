import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [searchKey, setSearchKey] = useState("");

    return (
        <label className="relative group">
            <input 
                type="text"
                value={searchKey}
                onChange={({target}) => setSearchKey(target.value)}
                placeholder="Enter search key here"
                className="pl-12 group-hover:pl-4 transition-all pr-4 py-2 text-sm bg-transparent border-2 rounded-md w-[30rem] border-gray-100/10 focus:outline-none focus:border-white/40 placeholder-gray-200/30 group-hover:bg-white/5 focus:bg-white/5"
            />
            <div className="absolute top-0 flex items-center justify-center w-12 h-full group-hover:right-0 text-gray-200/30 group-hover:text-white/70">
                <FaSearch />
            </div>
        </label>
    );
};

export default SearchBar;