import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "hashmap-d8aad.appspot.com",
    messagingSenderId: "203179192780",
    appId: "1:203179192780:web:23f62afbee9a93879f6d69"  
};

export const app = initializeApp(firebaseConfig);