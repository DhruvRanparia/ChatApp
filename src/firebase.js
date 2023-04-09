import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC26lEcRuLL-XI_Qf6RbJ6HUJLEohdGp-A",
  authDomain: "chatapp-8f197.firebaseapp.com",
  projectId: "chatapp-8f197",
  storageBucket: "chatapp-8f197.appspot.com",
  messagingSenderId: "799958146846",
  appId: "1:799958146846:web:234299317d752c5830b30f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();