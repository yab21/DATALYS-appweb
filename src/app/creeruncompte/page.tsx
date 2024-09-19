import React from "react";
import CreerUnCompte from "@/components/CreerUnCompte";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer un compte | DATALYS Consulting",
  description: "Le page de création de compte",
};

const Page = () => {
  return <CreerUnCompte />;
};

export default Page;
