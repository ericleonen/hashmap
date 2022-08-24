import {default as NextLink} from "next/link";

interface LinkProps {
    href: string,
    children: any
};

const Link = ({ href, children }: LinkProps) => {
    return (
        <NextLink href={href}>
            <a className="text-purple-400 hover:text-purple-500">
                {children}
            </a>
        </NextLink>
    );
};

export default Link;