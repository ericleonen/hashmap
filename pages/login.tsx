import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import { registerWithEmailAndPassword } from "./api/auth";

const Login = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        // await registerWithEmailAndPassword(name, email, password);
        router.push("/home");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={identifier}
                    onChange={({target}) => setIdentifier(target.value)}
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

export default Login;