import { SyntheticEvent } from "react";

interface FormProps {
    onSubmit: (e: SyntheticEvent) => void,
    children: any
};

const Form = ({ onSubmit, children }) => {
    return (
        <form 
            onSubmit={onSubmit}
            className="flex flex-col"
        >
            {children}
        </form>
    );
};

export default Form;