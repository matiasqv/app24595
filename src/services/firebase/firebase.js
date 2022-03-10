// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMTq7QVbF2fVN8RUP4wS3LDaX5xss4t9s",
    authDomain: "e-commerce-24925.firebaseapp.com",
    projectId: "e-commerce-24925",
    storageBucket: "e-commerce-24925.appspot.com",
    messagingSenderId: "1077770355490",
    appId: "1:1077770355490:web:e17e713288a04be59e5b7b",
    measurementId: "G-5231S9HDG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestoreDb = getFirestore(app)