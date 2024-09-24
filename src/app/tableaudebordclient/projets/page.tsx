import React from "react";
import Projet from "@/components/TableauDeBordClient/Projet";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Liste des projets | DATALYS Consulting",
  description: "La page de la liste des projets de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <Projet />
    </DefaultLayout>
  );
};

export default Page;
