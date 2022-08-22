import TextInput from "./TextInput";

interface EmailInputProps {
    email: string,
    setEmail: (value: string) => void
};

const EmailInput = ({ email, setEmail }: EmailInputProps) => {
    return (
        <TextInput
            label="Email Address"
            type="email"
            value={email}
            setValue={setEmail}
        />
    );
};

export default EmailInput;