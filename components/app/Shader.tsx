
const Shader = ({ children }: any) => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/80">
            {children}
        </div>
    );
};

export default Shader;