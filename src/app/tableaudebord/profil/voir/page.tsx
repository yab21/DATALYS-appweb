import React from "react";
import VoirProfil from "@/components/TableauDeBord/VoirProfil";
import DefaultLayout from "@/components/TableauDeBord/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil | DATALYS Consulting",
  description: "La page du profil de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <VoirProfil />
    </DefaultLayout>
  );
};

export default Page;
