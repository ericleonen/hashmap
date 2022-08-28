import { FaCopy } from "react-icons/fa";
import Button from "../general/Button";
import Card from "../general/Card";

const NoteQuickView = () => {
    return (
        <div className="mr-10">
            <Card onClick={() => {}}>
                <div className="w-[30rem]">
                    <h4 className="text-lg">useState Hook</h4>
                    <div className="px-4 py-2 mt-3 mb-6 rounded-lg bg-white/10">
                        <code className="text-sm">
                            const [value, setValue] = useState(initialValue);
                        </code>
                    </div>
                    <Button icon={<FaCopy />} label="Copy" onClick={() => {}}/>
                </div>
            </Card>
        </div>
    );
};

export default NoteQuickView;