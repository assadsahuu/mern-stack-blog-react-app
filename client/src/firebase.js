// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "asadblog.firebaseapp.com",
    projectId: "asadblog",
    storageBucket: "asadblog.appspot.com",
    messagingSenderId: "787563638815",
    appId: "1:787563638815:web:41a6c005f59c99bf18652a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);