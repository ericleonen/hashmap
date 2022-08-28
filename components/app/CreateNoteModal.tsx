import { useState } from "react";
import { FaSave } from "react-icons/fa";
import Button from "../general/Button";
import Card from "../general/Card";
import Shader from "./Shader";


const CreateNoteModal = () => {
    const [key, setKey] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");

    return (
        <Shader>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <Card opaque>
                    <input 
                        type="text"
                        value={key}
                        onChange={({target}) => setKey(target.value)}
                        className="text-lg bg-transparent border-none focus:outline-none placeholder-gray-200/30"
                        placeholder="Some unique key..."
                    />
                    <textarea 
                        placeholder="Enter description here"
                        onChange={({target}) => setDescription(target.value)}
                        className="w-full px-4 py-2 mt-4 text-sm bg-transparent border-2 rounded-md resize-none border-gray-100/10 placeholder-gray-200/30 focus:outline-none"
                    >
                        {description}
                    </textarea>
                    <textarea 
                        placeholder="Enter code here"
                        onChange={({target}) => setCode(target.value)}
                        className="w-full px-4 py-2 mt-4 mb-4 font-mono border-2 rounded-md resize-none bg-white/10 border-gray-100/10 placeholder-gray-200/30 focus:outline-none"
                    >
                        {code}
                    </textarea>
                    <Button 
                        icon={<FaSave />}
                        label="Save" onClick={undefined}                    
                    />
                </Card>
            </div>
        </Shader>
    );
};

export default CreateNoteModal;