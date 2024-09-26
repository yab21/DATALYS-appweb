import React from "react";
import ModifierProjet from "@/components/TableauDeBord/Projet/ModifierProjet";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBord/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Modifier le projet | DATALYS Consulting",
  description: "La page de modification du projet de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <ModifierProjet />
    </DefaultLayout>
  );
};

export default Page;
