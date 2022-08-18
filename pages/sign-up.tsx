import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
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
                <input 
                    type="text" 
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
                <input 
                    type="email" 
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
                <input 
                    type="password" 
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;