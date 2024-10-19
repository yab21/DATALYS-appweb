"use client"; // Assurez-vous que ce composant est un Client Component

import { signOut } from "firebase/auth"; // Importer la méthode signOut de Firebase
import { auth } from "@/firebase/firebaseConfig"; // Importer l'authentification Firebase initialisée
import { useState } from "react";

const DeconnexionButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      // Déconnexion de Firebase
      await signOut(auth);
      // Redirection vers la page de connexion après déconnexion
      window.location.href = "/connexion";
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleSignOut} disabled={loading}>
      {loading ? "Déconnexion..." : "Se déconnecter"}
    </button>
  );
};

export default DeconnexionButton;
