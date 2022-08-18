import { AppProps } from "next/app";
import Head from "next/head";
import { useRouteGuard } from "../hooks/routing";

const App = ({ Component, pageProps }: AppProps) => {
    useRouteGuard(["/", "/login", "/sign-up", "/password-reset"]);

    return (
        <div>
            <Head>
                <title>Hashmap</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
};

export default App;