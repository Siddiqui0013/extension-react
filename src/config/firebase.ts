import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyBqn9spXCzvJIRaiIX-8N4MNPQaalBXSWE",
  authDomain: "seller-tool-d63f6.firebaseapp.com",
  projectId: "seller-tool-d63f6",
  storageBucket: "seller-tool-d63f6.appspot.com",
  messagingSenderId: "197601742841",
  appId: "1:197601742841:web:aaa898dda1e4855c4c3728",
  measurementId: "G-LBWTB8XYM9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);