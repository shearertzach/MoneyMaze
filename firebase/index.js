// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSwENj7Ns_Og68-0ervxb3vSksuqyFxI",
  authDomain: "reflected-ion-367014.firebaseapp.com",
  projectId: "reflected-ion-367014",
  storageBucket: "reflected-ion-367014.appspot.com",
  messagingSenderId: "297398440601",
  appId: "1:297398440601:web:a43a4f98291e5d899f1e08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()



