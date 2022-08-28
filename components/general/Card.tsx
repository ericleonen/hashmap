interface CardProps {
    children: any,
    onClick?: Function
};

const Card = ({ children, onClick }: CardProps) => {
    if (onClick) {
        return (
            <div className="p-10 transition-all shadow-xl w-min rounded-xl bg-white/10 hover:bg-white/[0.15]">
                {children}
            </div>
        );
    }
    
    return (
        <div className="p-10 shadow-xl w-min rounded-xl bg-white/10">
            {children}
        </div>
    );
};

export default Card;