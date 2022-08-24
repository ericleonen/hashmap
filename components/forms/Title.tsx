interface TitleProps {
    children: any
}

const Title = ({ children }: any) => {
    return (
        <h3 
            className="text-lg mb-4 text-purple-400"
        >
                {children}
        </h3>
    );
};

export default Title;