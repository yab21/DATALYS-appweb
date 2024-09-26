import React from "react";
import CreerUnCompte from "@/components/CreerUnCompte"; // Le composant client

export const metadata = {
  title: "Créer un compte | DATALYS Consulting",
  description: "Le page de création de compte",
};

const Page = () => {
  return <CreerUnCompte />; // Rend le composant client ici
};

export default Page;
