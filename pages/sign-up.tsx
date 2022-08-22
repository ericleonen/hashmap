import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import EmailInput from "../components/forms/EmailInput";
import PasswordInput from "../components/forms/PasswordInput";
import TextInput from "../components/forms/TextInput";
import { registerWithEmailAndPassword } from "./api/auth";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        // TODO: need to check name, email, and password here
        e.preventDefault();
        await registerWithEmailAndPassword(name, email, password);
        router.push("/home");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput 
                    type="text"
                    label="Name"
                    value={name}
                    setValue={setName}
                />
                <EmailInput email={email} setEmail={setEmail} />
                <PasswordInput password={password} setPassword={setPassword} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;