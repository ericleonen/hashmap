interface ButtonProps {
    icon?: any,
    label: string,
    onClick: Function
};

const Button = ({ icon, label, onClick }: ButtonProps) => {
    return (
        <button 
            className="flex items-center px-4 py-2 text-sm transition-all rounded-md bg-gradient-to-l from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
        >
            { icon && icon }
            <span className="ml-2">{label}</span>
        </button>
    );
};

export default Button;