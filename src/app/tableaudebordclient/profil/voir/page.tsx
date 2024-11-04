import React from "react";
import VoirProfil from "@/components/TableauDeBordClient/Profil/Voir";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voir profil | DATALYS Consulting",
  description:
    "La page pour voir le profil de l'administrateur de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <VoirProfil />
    </DefaultLayout>
  );
};

export default Page;
