// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
if (apiKey === "false") {
    throw Error("apiKey must be definied in .env.local or in the environment.")
}

// Your web app's Firebase configuration
const firebaseConfig =  {
  apiKey: apiKey,
  authDomain: "fallon-io-portfolio.firebaseapp.com",
  projectId: "fallon-io-portfolio",
  storageBucket: "fallon-io-portfolio.appspot.com",
  messagingSenderId: "408578430423",
  appId: "1:408578430423:web:6c7fa16fbd2f0a5ccce792"
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

if (process.env.REACT_APP_FIREBASE_EMULATORS === "true") {
    connectFirestoreEmulator(db, "localhost", 8080)
    connectAuthEmulator(auth, "http://localhost:9099")
}

// Exports at the bottom to allow for emulator initialization in the middle.
export {app, db, auth, storage}