import { app } from ".";
import { 
    createUserWithEmailAndPassword,
    getAuth, 
    sendPasswordResetEmail, 
    signInWithEmailAndPassword, 
    signOut
} from 'firebase/auth';
import { createUser } from "./db";

export const auth = getAuth(app);

export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    // assume name, email, and password are all checked and valid

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await createUser(user.uid, name, email);
    }
    catch (err) {
        console.error(err);
    }
};

export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.error(err);
    }
};

export const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
    }
    catch (err) {
        console.error(err);
    }
};

export const logout = () => {
    signOut(auth);
};