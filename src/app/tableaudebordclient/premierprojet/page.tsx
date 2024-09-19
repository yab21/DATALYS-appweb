import React from "react";
import PremierProjet from "@/components/TableauDeBordClient/PremierProjet";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Premier projet | DATALYS Consulting",
  description: "La page de 1st projet de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <PremierProjet />
    </DefaultLayout>
  );
};

export default Page;
