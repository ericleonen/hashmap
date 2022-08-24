import Link from "../general/Link";
import TextInput from "./TextInput";

interface PasswordInputProps {
    password: string,
    setPassword: (value: string) => void,
    forgotPassword?: boolean
};

const PasswordInput = ({ password, setPassword, forgotPassword }: PasswordInputProps) => {
    return (
        <>
            <TextInput
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
            >
            </TextInput>
            { 
                forgotPassword && 
                <p className="text-xs text-right mt-[-0.5rem]">
                    <Link href="/password-reset">Forgot password?</Link>
                </p>
            }
        </>
    );
};

export default PasswordInput;