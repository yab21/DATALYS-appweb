import React from "react";
import Modifier from "@/components/TableauDeBordClient/Profil/Modifier";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modifier le profil | DATALYS Consulting",
  description:
    "La page pour modifier le profil de l'administrateur de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Modifier />
    </DefaultLayout>
  );
};

export default Page;
