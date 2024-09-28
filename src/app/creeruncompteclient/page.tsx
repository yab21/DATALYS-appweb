import React from "react";
import CreerUnCompteClient from "@/components/CreerUnCompteClient"; // Le composant client

export const metadata = {
  title: "Créer un compte client | DATALYS Consulting",
  description: "Le page de création de compte client",
};

const Page = () => {
  return <CreerUnCompteClient />; // Rend le composant client ici
};

export default Page;
