import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import LesDossiers from "@/components/TableauDeBordClient/LesDossiers";

export const metadata: Metadata = {
  title: "Les différents dossiers du client | DATALYS Consulting",
  description:
    "La page des différents dossiers du client de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <LesDossiers />
    </DefaultLayout>
  );
};

export default Page;
