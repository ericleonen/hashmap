import { FaPlus } from "react-icons/fa";

const CreateBtn = () => {
    return (
        <button className="flex items-center px-4 py-2 text-sm transition-all rounded-md bg-gradient-to-l from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800">
            <FaPlus /> 
            <span className="ml-2">Create new note</span>
        </button>
    );
};

export default CreateBtn;