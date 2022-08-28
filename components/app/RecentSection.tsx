import { FaCopy } from "react-icons/fa";
import Card from "../general/Card";
import NoteQuickView from "./NoteQuickView";

const RecentSection = () => {
    return (
        <div className="w-[80%] mt-20">
            <h3 className="text-3xl">Recent</h3>
            <div className="flex flex-wrap mt-8">
                <NoteQuickView />
                <NoteQuickView />
            </div>
        </div>
    );
};

export default RecentSection;