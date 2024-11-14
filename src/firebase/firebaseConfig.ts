// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, User } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp, DocumentData } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage, isSupported } from "firebase/messaging";
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

let messaging: any = null;

const initializeMessaging = async () => {
  if (typeof window !== "undefined") {
    try {
      const isMessagingSupported = await isSupported();
      if (isMessagingSupported) {
        messaging = getMessaging(app);
        return messaging;
      }
    } catch (error) {
      console.log('Firebase messaging not supported in this environment');
    }
  }
  return null;
};

// Ajoutez cette interface pour le type de projet
interface ProjectData extends DocumentData {
  authorizedUsers: string[];
  // Ajoutez d'autres champs selon votre structure de projet
}

// Fonction améliorée pour créer une notification
export const createNotification = async (
  userId: string,
  notification: { title: string; body: string; link: string },
  createdBy: string
) => {
  try {
    const notificationsRef = collection(db, "users", userId, "notifications");
    await addDoc(notificationsRef, {
      ...notification,
      createdBy,
      createdAt: new Date(),
      read: false,
    });
  } catch (error) {
    console.error("Error creating notification:", error);
  }
};

// Fonction pour obtenir le token FCM
export const requestFCMToken = async (): Promise<string | null> => {
  try {
    const messagingInstance = await initializeMessaging();
    if (!messagingInstance) {
      console.log('Messaging not supported');
      return null;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messagingInstance, { 
        vapidKey: vapidKey 
      });
      return token;
    }
    return null;
  } catch (error) {
    console.log('Error requesting FCM token:', error);
    return null;
  }
};

// Fonction pour écouter les messages en premier plan
export const onMessageListener = () => {
  return new Promise((resolve) => {
    if (messaging) {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    } else {
      resolve(null);
    }
  });
};

// Initialiser le messaging au démarrage
initializeMessaging().catch(console.error);

export { auth, db, storage, app, analytics };

const fetchProject = async (projectId: string): Promise<ProjectData | null> => {
  const user = auth.currentUser;
  if (!user) {
    console.error("Utilisateur non authentifié");
    return null;
  }

  const docRef = doc(db, "projects", projectId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const projectData = docSnap.data() as ProjectData;
    // Vérifiez les permissions via une requête séparée pour obtenir le statut admin
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);
    const isAdmin = userDocSnap.exists() ? userDocSnap.data()?.isAdmin : false;

    if (projectData.authorizedUsers.includes(user.uid) || isAdmin) {
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

// Add this helper function
export const initializeFirebaseMessaging = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      return getMessaging(app);
    } catch (error) {
      console.log('Firebase messaging not supported');
      return null;
    }
  }
  return null;
};
