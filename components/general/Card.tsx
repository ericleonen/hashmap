interface CardProps {
    children: any,
    onClick?: Function,
    opaque?: boolean
};

const Card = ({ children, onClick, opaque }: CardProps) => {
    if (opaque) {
        return (
            <div className="overflow-hidden bg-white shadow-xl w-min rounded-xl">
                <div className="bg-[#121212]/95">
                    <div className="p-10 bg-white/10">
                        {children}
                    </div>
                </div>
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