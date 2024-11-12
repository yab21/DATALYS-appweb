// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
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
if (typeof window !== "undefined") {
  messaging = getMessaging(app);
}

// Fonction améliorée pour créer une notification
export const createNotification = async (
  recipientId: string, 
  notification: {
    title: string;
    body: string;
    link?: string;
  },
  actionUserId: string
) => {
  try {
    if (!actionUserId) {
      console.error("ID de l'utilisateur qui fait l'action manquant");
      return;
    }

    // Récupérer les informations de l'utilisateur qui fait l'action
    const actionUserDoc = await getDoc(doc(db, "users", actionUserId));
    if (!actionUserDoc.exists()) {
      console.error("Utilisateur qui fait l'action non trouvé");
      return;
    }

    const actionUserData = actionUserDoc.data();
    if (!actionUserData?.firstName || !actionUserData?.lastName) {
      console.error("Données utilisateur incomplètes");
      return;
    }

    let notificationBody = notification.body;

    // Si le destinataire est différent de l'utilisateur qui fait l'action
    if (recipientId !== actionUserId) {
      // Format: "P. Nom a créé..." (sans le verbe dans notification.body)
      const userInitials = `${actionUserData.firstName.charAt(0)}. ${actionUserData.lastName}`;
      // Le message notification.body ne doit plus contenir le verbe "avez"
      notificationBody = `${userInitials} ${notificationBody}`;
    } else {
      // Format: "Vous avez créé..."
      notificationBody = `Vous avez ${notificationBody}`;
    }

    const notificationsRef = collection(db, "users", recipientId, "notifications");
    await addDoc(notificationsRef, {
      ...notification,
      body: notificationBody,
      timestamp: serverTimestamp(),
      read: false,
    });
  } catch (error) {
    console.error("Erreur lors de la création de la notification:", error);
  }
};

// Fonction pour obtenir le token FCM
export const requestFCMToken = async (): Promise<string | null> => {
  if (typeof window !== "undefined" && messaging) {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, { 
          vapidKey: "BFaXd4OytA6IpbDILdtWk_GjmBUk4Iwd9t5-L1tc4A1K6N8x9owSfSv1ylB-oeRWuksMnQj9sXIx6D_9XNfE5w8" 
        });
        console.log("FCM Token obtenu:", token);
        return token;
      } else {
        console.log("Permission de notification refusée");
        return null;
      }
    } catch (error) {
      console.error("Erreur lors de l'obtention du FCM Token:", error);
      return null;
    }
  }
  return null;
};

// Fonction pour écouter les messages en premier plan
export const onMessageListener = () => {
  if (typeof window !== "undefined" && messaging) {
    return new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });
  }
  return Promise.resolve(null);
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
