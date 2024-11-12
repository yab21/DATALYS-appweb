"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";
import ModifierProfil from "@/components/TableauDeBord/Profil/ModifierProfil";
import { Button } from "@nextui-org/react";

const VoirProfil = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async () => {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user) {
      console.log("Utilisateur authentifié:", user.uid);
      const db = getFirestore(app);
      const userDoc = doc(db, "users", user.uid);
      console.log("Tentative de récupération des données pour l'utilisateur:", user.uid);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        console.log("Données utilisateur récupérées:", userSnapshot.data());
        setUserData(userSnapshot.data());
      } else {
        console.log("Aucune donnée trouvée pour cet utilisateur.");
      }
    } else {
      console.log("Aucun utilisateur authentifié.");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    console.log("Rafraîchissement des données du profil...");
    await fetchUserData();
  };

  return (
    <>
      <Breadcrumb pageName="Voir votre profil" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-12 gap-6 px-4">
              <div className="col-span-3">
                <div className="rounded-lg border-stroke bg-white p-6 shadow dark:border-stroke-dark dark:bg-gray-dark">
                  <div className="flex flex-col items-center">
                    {userData && (
                      <Image
                        src={userData.profileImage || "/images/user.png"}
                        className="mb-4 shrink-0 rounded-full bg-gray-300"
                        width={128}
                        height={128}
                        alt="person"
                      />
                    )}
                    <h1 className="text-xl font-bold">{userData?.firstName} {userData?.lastName || "Nom"}</h1>
                    <p className="text-gray-900 dark:text-white">
                      {userData?.role || "Rôle"}
                    </p>
                    <Button
                      onPress={() => setIsEditing(true)}
                      color="primary"
                      className="mt-4"
                    >
                      Modifier le Profil
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-9">
                <div className="rounded-lg border-stroke bg-white p-6 shadow dark:border-stroke-dark dark:bg-gray-dark">
                  <h2 className="mb-4 text-xl font-bold">Voir Votre profil</h2>
                  <div className="mt-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 gap-2 px-2 py-6 md:grid-cols-2 md:gap-4 md:py-4">
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Nom: <span className="font-light">{userData?.lastName || "Nom"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Prénom: <span className="font-light">{userData?.firstName || "Prénom"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Nom d'utilisateur:{" "}
                        <span className="font-light">{userData?.username || "Nom d'utilisateur"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Votre fonction:{" "}
                        <span className="font-light">{userData?.function || "Fonction"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Société:{" "}
                        <span className="font-light">{userData?.company || "Société"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Département de la société:{" "}
                        <span className="font-light">{userData?.department || "Département"}</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Adresse e-mail:{" "}
                        <span className="font-light">{userData?.email || "Email"}</span>
                      </p>
                      {/* Ne pas afficher le mot de passe pour des raisons de sécurité */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditing && (
        <ModifierProfil 
          userData={userData} 
          onClose={() => setIsEditing(false)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default VoirProfil;