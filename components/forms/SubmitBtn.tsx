interface SubmitBtn {
    children: any
};

const SubmitBtn = ({ children }: SubmitBtn) => {
    return (
        <input
            value={children} 
            type="submit"
            className="mt-6 px-4 py-2 text-sm rounded-md bg-gradient-to-l from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
        />
    );
};

export default SubmitBtn;