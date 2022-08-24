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
        <Page type="centered">
            <Card>
                <Form onSubmit={handleSubmit}>
                    <Title>Sign in to existing account</Title>
                    <EmailInput email={email} setEmail={setEmail} />
                    <PasswordInput password={password} setPassword={setPassword} forgotPassword/>
                    <SubmitBtn>Login</SubmitBtn>
                    <Extra>Don't have an account? Sign up <Link href="/sign-up">here</Link></Extra>
                </Form>
            </Card>
        </Page>
    );
};

export default Login;