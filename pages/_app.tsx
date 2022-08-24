import { AppProps } from "next/app";
import Head from "next/head";
import { useRouteGuard } from "../hooks/routing";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
    useRouteGuard(["/", "/login", "/sign-up", "/password-reset"]);

    return (
        <div className="h-screen w-screen bg-[#121212]/95">
            <Head>
                <title>Hashmap</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
};

export default App;