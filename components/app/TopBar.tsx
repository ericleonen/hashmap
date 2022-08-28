import { FaPlus } from "react-icons/fa";
import Button from "../general/Button";
import Logo from "./Logo";

const TopBar = ({ children }: any) => {
    return (
        <div className="flex items-center justify-between w-full px-8 py-6 shadow-xl bg-white/10">
            <Logo />
            {children}
            <Button icon={<FaPlus />} label="Create new note" onClick={() => {}} />
        </div>
    );
};

export default TopBar;