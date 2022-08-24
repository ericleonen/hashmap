interface PageProps {
    type: "stack" | "centered",
    children: any
};

const Page = ({ type, children }: PageProps) => {
    if (type === "centered") {
        return (
            <div className="h-full w-full flex justify-center items-center">
                {children}
            </div>
        )
    }

    return null;
};

export default Page;