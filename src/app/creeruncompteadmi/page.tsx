import React from "react";
import CreerUnCompteAdmi from "@/components/CreerUnCompteAdmi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer un compte administrateur | DATALYS Consulting",
  description: "Le page de création de compte",
};

const Page = () => {
  return <CreerUnCompteAdmi />;
};

export default Page;
