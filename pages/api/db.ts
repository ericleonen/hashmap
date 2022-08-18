import {
    addDoc,
    collection,
    getFirestore
} from 'firebase/firestore';
import { app } from '.';

export const db = getFirestore(app);

export const createUser = async (uid: string, name: string, email: string) => {
    await addDoc(collection(db, "users"), {
        uid,
        name,
        email,
        notes: {}
    });
};