import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from "./api/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await logInWithEmailAndPassword(email, password);
        router.push("/home");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
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

export default Login;