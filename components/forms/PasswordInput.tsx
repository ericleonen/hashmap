import TextInput from "./TextInput";

interface PasswordInputProps {
    password: string,
    setPassword: (value: string) => void
};

const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {
    return (
        <TextInput
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
        >

        </TextInput>
    );
};

export default PasswordInput;