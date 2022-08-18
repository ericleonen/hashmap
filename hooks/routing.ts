import { useRouter } from "next/router";
import { SyntheticEvent, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../pages/api/auth";

export const useRouteGuard = (publicPaths: Array<string>) => {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const path = router.asPath.split("?")[0];

        if (!loading && !error) {
            if (user && publicPaths.includes(path)) {
                router.push("/home");
            }
            else if (!user && !publicPaths.includes(path)) {
                router.push("/");
            }
        }
    }, [user, loading, error]);
};