import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const appId = process.env.REACT_APP_FIREBASE_API_ID;

const firebaseConfig = {
  apiKey,
  authDomain: "bddaypal.firebaseapp.com",
  projectId: "bddaypal",
  storageBucket: "bddaypal.appspot.com",
  messagingSenderId: "434292080553",
  appId,
  measurementId: "G-BHQD9TXL8Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserSessionPersistence);
