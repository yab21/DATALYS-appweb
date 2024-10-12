import React from "react";
import { Metadata } from "next";
import { ParentFolderIdProvider } from "@/context/ParentFolderIdContext"; // Import du provider
import DefaultLayout from "@/components/TableauDeBord/Layouts/DefaultLaout";
import PageProjet from "@/components/TableauDeBord/Projet/VoirProjet";

export const metadata: Metadata = {
  title: "Voir le projet | DATALYS Consulting",
  description: "La page pour voir un projet de DATALYS Consulting",
};

const Page = () => {
  return (
    <ParentFolderIdProvider>
    <DefaultLayout>
      <PageProjet />
    </DefaultLayout>
    </ParentFolderIdProvider>
  );
};

export default Page;
