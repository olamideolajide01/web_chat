import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1_bXPAf3uZxe-TVq7oilHC0paW3ORsnQ",
  authDomain: "yofochat.firebaseapp.com",
  projectId: "yofochat",
  storageBucket: "yofochat.appspot.com",
  messagingSenderId: "937714157354",
  appId: "1:937714157354:web:74479a01d2903b66200053",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
