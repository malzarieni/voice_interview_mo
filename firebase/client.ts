import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCv32NMkBXRepm5dLpPsNqBDBzWgq5KZTo",
    authDomain: "hireready-8e290.firebaseapp.com",
    projectId: "hireready-8e290",
    storageBucket: "hireready-8e290.firebasestorage.app",
    messagingSenderId: "910400920067",
    appId: "1:910400920067:web:bd837ac986ce220d848c36",
    measurementId: "G-T4QH7MF8XD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);