import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import TroisiemeProjet from "@/components/TableauDeBordClient/TroisiemeProjet";

export const metadata: Metadata = {
  title: "Troisieme projet | DATALYS Consulting",
  description: "La page du troisieme projet de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <TroisiemeProjet />
    </DefaultLayout>
  );
};

export default Page;
