// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdzrpDT9iifZD7r_1wVKl3e2aO4Qp6ZcY",
  authDomain: "datalys-consulting.firebaseapp.com",
  projectId: "datalys-consulting",
  storageBucket: "datalys-consulting.appspot.com",
  messagingSenderId: "374891323631",
  appId: "1:374891323631:web:2517ab2666832cc0a53b1a",
  measurementId: "G-MRGRBCZQHV",
};

const vapidKey = "BFaXd4OytA6IpbDILdtWk_GjmBUk4Iwd9t5-L1tc4A1K6N8x9owSfSv1ylB-oeRWuksMnQj9sXIx6D_9XNfE5w8";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app); // Authentification Firebase
const db = getFirestore(app); // Firestore si nécessaire
const storage = getStorage(app); // Storage si nécessaire

let messaging;
if (typeof window !== "undefined") {
  messaging = getMessaging(app);
}

export const requestFCMToken = async () => {
  return await Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, { vapidKey });
      } else {
        throw new Error("Notification non accordée");
      }
    })
    .catch((err) => {
      console.error("Erreur dans l'obtention du FCM Token", err);
      throw err;
    });
};

export { auth, db, storage, app, analytics, messaging };

const fetchProject = async (projectId) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("Utilisateur non authentifié");
    return null;
  }

  const docRef = doc(db, "projects", projectId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const projectData = docSnap.data();
    if (projectData.authorizedUsers.includes(user.uid) || user.admin) {
      return projectData;
    } else {
      console.error("Accès refusé");
      return null;
    }
  } else {
    console.error("Projet non trouvé");
    return null;
  }
};
