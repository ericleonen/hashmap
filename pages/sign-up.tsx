import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import EmailInput from "../components/forms/EmailInput";
import Extra from "../components/forms/Extra";
import Form from "../components/forms/Form";
import PasswordInput from "../components/forms/PasswordInput";
import SubmitBtn from "../components/forms/SubmitBtn";
import TextInput from "../components/forms/TextInput";
import Title from "../components/forms/Title";
import Card from "../components/general/Card";
import Link from "../components/general/Link";
import Page from "../components/general/Page";
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
        router.push("/app");
    };

    return (
        <Page type="centered">
            <Card>
                <Form onSubmit={handleSubmit}>
                    <Title>Create a new account</Title>
                    <TextInput 
                        type="text"
                        label="Name"
                        value={name}
                        setValue={setName}
                    />
                    <EmailInput email={email} setEmail={setEmail} />
                    <PasswordInput password={password} setPassword={setPassword} />
                    <SubmitBtn>Create account</SubmitBtn>
                    <Extra>Already have an account? Sign in <Link href="/login">here</Link></Extra>
                </Form>
            </Card>
        </Page>
    );
};

export default SignUp;