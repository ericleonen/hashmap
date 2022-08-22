import { SyntheticEvent, useState } from "react";
import { sendPasswordReset } from "./api/auth";

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: SyntheticEvent)  => {
        e.preventDefault();
        await sendPasswordReset(email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PasswordReset;