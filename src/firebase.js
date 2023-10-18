import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCbWrttIE7-cOasTjiKiUKP9k2sdcuqec",
  authDomain: "react-portfolio-dashboar-8d763.firebaseapp.com",
  projectId: "react-portfolio-dashboar-8d763",
  storageBucket: "react-portfolio-dashboar-8d763.appspot.com",
  messagingSenderId: "836464681149",
  appId: "1:836464681149:web:970b902e8021eb55c817d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);