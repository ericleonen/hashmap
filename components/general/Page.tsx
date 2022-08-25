interface PageProps {
    type: "stack" | "centered",
    children: any
};

const Page = ({ type, children }: PageProps) => {
    if (type === "centered") {
        return (
            <div className="flex items-center justify-center w-full h-full">
                {children}
            </div>
        )
    }
    else if (type === "stack") {
        return (
            <div className="flex flex-col items-center w-full h-full">
                {children}
            </div>
        )
    }

    return null;
};

export default Page;