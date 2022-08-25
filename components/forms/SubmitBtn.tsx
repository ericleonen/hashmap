interface SubmitBtn {
    children: any
};

const SubmitBtn = ({ children }: SubmitBtn) => {
    return (
        <input
            value={children} 
            type="submit"
            className="px-4 py-2 mt-6 text-sm transition-all rounded-md bg-gradient-to-l from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
        />
    );
};

export default SubmitBtn;