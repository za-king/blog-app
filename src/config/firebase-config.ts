// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs9khExyYYElgXPdTSaaFgW4HvDdjVUrE",
  authDomain: "blogapp-f38e4.firebaseapp.com",
  projectId: "blogapp-f38e4",
  storageBucket: "blogapp-f38e4.appspot.com",
  messagingSenderId: "229554093617",
  appId: "1:229554093617:web:e2e38cc4c6b8e86bcd9f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()