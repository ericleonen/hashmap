import Logo from "./Logo";

const TopBar = ({ children }: any) => {
    return (
        <div className="flex items-center justify-between w-full px-8 py-6 shadow-xl bg-white/10">
            <Logo />
            {children}
        </div>
    );
};

export default TopBar;