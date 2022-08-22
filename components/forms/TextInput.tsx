interface TextInputProps {
    label: string,
    type: string,
    value: string,
    setValue: (value: string) => void,
    children?: any
};

const TextInput = ({ label, type, value, setValue, children }: TextInputProps) => {
    return (
        <div>
            <label>
                <p>{label}</p>
                <input 
                    type={type}
                    value={value}
                    onChange={({target}) => setValue(target.value)}
                    placeholder={label}
                    className="py-2 px-4"
                />
            </label>
        </div>
    );
};

export default TextInput;