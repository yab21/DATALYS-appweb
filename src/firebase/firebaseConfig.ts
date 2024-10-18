// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdzrpDT9iifZD7r_1wVKl3e2aO4Qp6ZcY",
  authDomain: "datalys-consulting.firebaseapp.com",
  projectId: "datalys-consulting",
  storageBucket: "datalys-consulting.appspot.com",
  messagingSenderId: "374891323631",
  appId: "1:374891323631:web:2517ab2666832cc0a53b1a",
  measurementId: "G-MRGRBCZQHV"

  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app); // Authentification Firebase
const db = getFirestore(app); // Firestore si nécessaire
const storage = getStorage(app); // Storage si nécessaire

export { auth, db, storage };

export { app, analytics };
