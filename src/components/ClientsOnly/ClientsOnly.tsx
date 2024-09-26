"use client"; // Ce fichier sera un Client Component

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import { auth } from "@/firebase/firebaseConfig"; // Importer l'authentification Firebase initialisée

const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true); // Pour afficher un indicateur de chargement
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        setIsAuthenticated(true);
      } else {
        // L'utilisateur n'est pas connecté, redirection vers la page de connexion
        setIsAuthenticated(false);
        window.location.href = "/connexionclient"; // Redirection immédiate si non authentifié
      }
      setLoading(false); // Arrêter le chargement une fois l'état d'authentification vérifié
    });

    // Nettoyage de l'écouteur d'événements Firebase
    return () => unsubscribe();
  }, []); // [] pour ne s'exécuter qu'une seule fois

  if (loading) {
    return <p>Chargement...</p>; // Afficher un indicateur de chargement pendant la vérification de l'authentification
  }

  if (!isAuthenticated) {
    return null; // Si l'utilisateur n'est pas connecté, la redirection est déjà effectuée
  }

  return <>{children}</>; // Rendre le tableau de bord si l'utilisateur est authentifié
};

export default ClientOnly;
