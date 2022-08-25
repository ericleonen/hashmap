interface TextInputProps {
    label: string,
    type: string,
    value: string,
    setValue: (value: string) => void,
    children?: any
};

const TextInput = ({ label, type, value, setValue, children }: TextInputProps) => {
    return (
        <div className="mb-3">
            <label>
                <p className="mb-1 text-xs">{label}</p>
                <input 
                    type={type}
                    value={value}
                    onChange={({target}) => setValue(target.value)}
                    placeholder={label}
                    className="px-4 py-2 text-sm transition-all bg-transparent border-2 rounded-md border-gray-100/10 focus:outline-none focus:border-white/40 placeholder-gray-200/30 hover:bg-white/5 focus:bg-white/5"
                />
            </label>
        </div>
    );
};

export default TextInput;