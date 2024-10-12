"use client"; // Ceci est un composant client

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { doc, setDoc } from "firebase/firestore"; // Pour enregistrer dans Firestore
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importer Firebase auth
import { db } from "@/firebase/firebaseConfig"; // Importer la configuration Firestore et Firebase
import OneSignal from 'react-onesignal';

const CreerUnCompteClient: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    domain: "",
    company: "",
    department: "",
    role: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const auth = getAuth(); // Utiliser l'authentification Firebase

    try {
      // Créer l'utilisateur avec l'email et le mot de passe
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      // Enregistrer les informations supplémentaires dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        projectName: formData.projectName,
        domain: formData.domain,
        company: formData.company,
        department: formData.department,
        role: formData.role,
        email: formData.email,
      });

      // Après avoir créé le compte avec succès, envoyez une notification
      await OneSignal.init({ appId: 'da5a8e4c-ebc1-424a-af0f-9a386736940f' });
      await OneSignal.sendNotification({
        contents: {
          'en': `Nouveau compte créé par ${formData.firstName} ${formData.lastName}`
        },
        include_player_ids: ['TEMPORARY_ADMIN_ID'] // Remplacer par l'ID réel de l'admin quand disponible
      });

      console.log("Utilisateur créé avec succès et notification envoyée");

      // Redirection vers la page de connexion
      window.location.href = "/connexionclient";
    } catch (error: any) {
      // Gérer les erreurs spécifiques à Firebase
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Cet e-mail est déjà utilisé. Veuillez vous connecter.");
          break;
        case "auth/invalid-email":
          setError("L'adresse e-mail est invalide.");
          break;
        case "auth/weak-password":
          setError("Le mot de passe est trop faible.");
          break;
        default:
          setError("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex w-full">
      <div className="relative hidden h-screen flex-1 items-center justify-center bg-[#001614] lg:flex">
        <div className="relative z-10 -mt-4 w-full max-w-md">
          <img src="/images/logo/logo.png" width={180} />
          <div className="mt-16 space-y-3">
            <h3 className="text-3xl font-bold text-white">
              Infrastructure et analyse des données
            </h3>
            <p className="text-gray-300">
              La donnée est aujourd'hui un moteur de croissance pour beaucoup
              d'entreprises.
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 flex h-screen flex-1 items-center justify-center">
        <div className="w-full max-w-2xl space-y-8 px-3 text-gray-600 md:px-6">
          <div className="">
            <Image
              src="/images/logo/logo.png"
              width={150}
              height={150}
              className="lg:hidden"
              alt=""
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-bold text-[#002925] sm:text-3xl">
                Créer un compte
              </h3>
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Input
                type="text"
                color="primary"
                label="Nom"
                variant="flat"
                placeholder="Entrer votre nom"
                className="max-w-xs"
                name="lastName"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                color="primary"
                label="Prénom"
                variant="flat"
                placeholder="Entrer votre prénom"
                className="max-w-xs"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Input
                type="text"
                color="primary"
                label="Nom du projet"
                variant="flat"
                placeholder="Entrer le nom du projet"
                className="max-w-xs"
                name="projectName"
                onChange={handleChange}
                required
              />
              <Select
                label="Domaine du projet"
                color="primary"
                variant="flat"
                name="domain"
                placeholder="Choisir un domaine"
                className="max-w-xs"
              >
                <SelectItem key="all">Tous les domaines</SelectItem>
                <SelectItem key="itcloud">ITCloud</SelectItem>
                <SelectItem key="sécurité réseau">Sécurité réseau</SelectItem>
                <SelectItem key="data center & énergie">
                  Data center & énergie
                </SelectItem>
              </Select>
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Input
                type="text"
                color="primary"
                label="Société"
                variant="flat"
                placeholder="Entrer le nom de la société"
                className="max-w-xs"
                name="company"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                color="primary"
                label="Département de la société"
                variant="flat"
                placeholder="Entrer le département"
                className="max-w-xs"
                name="department"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Input
                type="text"
                color="primary"
                label="Fonction"
                variant="flat"
                placeholder="Entrer votre fonction"
                className="max-w-xs"
                name="role"
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                color="primary"
                label="Adresse e-mail"
                variant="flat"
                placeholder="Entrer l'adresse e-mail"
                className="max-w-xs"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Input
                type="password"
                color="primary"
                label="Mot de passe"
                variant="flat"
                placeholder="Entrer le mot de passe"
                className="max-w-xs"
                name="password"
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                color="primary"
                label="Confirmer mot de passe"
                variant="flat"
                placeholder="Confirmer le mot de passe"
                className="max-w-xs"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              color="primary"
              variant="solid"
              disabled={loading}
            >
              {loading ? "Création..." : "Valider"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <Link
            className="mt-1 flex justify-start font-thin text-dark"
            href="/connexionclient"
          >
            Page de connexion.
          </Link>
          <Link
            className="mt-1 flex justify-start font-thin text-dark"
            href="/"
          >
            Accéder aux différents utilisateurs.
          </Link>
          <div className="flex justify-center px-3 pb-4 pt-5">
            <p className="text-primary">
              All Rights Reserved by
              <span className="font-medium"> DATALYS Consulting</span>. Designed
              and Developed by{" "}
              <Link className="text-dark" href="javascript:;">
                LA VICTOIRE
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreerUnCompteClient;
