// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-B86GRx7zrCv6KS5JxaXad9KbLKl-p1w",
  authDomain: "next-firebase-test-bed66.firebaseapp.com",
  projectId: "next-firebase-test-bed66",
  storageBucket: "next-firebase-test-bed66.appspot.com",
  messagingSenderId: "146812645425",
  appId: "1:146812645425:web:e877dedf1ba05e8b816510",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
