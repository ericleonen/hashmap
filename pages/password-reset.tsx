import { SyntheticEvent, useState } from "react";
import EmailInput from "../components/forms/EmailInput";
import Form from "../components/forms/Form";
import SubmitBtn from "../components/forms/SubmitBtn";
import Title from "../components/forms/Title";
import Card from "../components/general/Card";
import Page from "../components/general/Page";
import { sendPasswordReset } from "./api/auth";

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: SyntheticEvent)  => {
        e.preventDefault();
        await sendPasswordReset(email);
    }

    return (
        <Page type="centered">
            <Card>
                <Form onSubmit={handleSubmit}>
                    <Title>Password reset</Title>
                    <EmailInput email={email} setEmail={setEmail} />
                    <SubmitBtn>Send reset link</SubmitBtn>
                </Form>
            </Card>
        </Page>
    );
};

export default PasswordReset;