
const Card = ({ children }: any) => {
    return (
        <div className="w-min p-10 rounded-xl bg-white/10 shadow-xl">
            {children}
        </div>
    );
};

export default Card;