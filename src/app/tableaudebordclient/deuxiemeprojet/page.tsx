import React from "react";
import DeuxiemeProjet from "@/components/TableauDeBordClient/DeuxiemeProjet";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Deuxieme projet | DATALYS Consulting",
  description: "La page du deuxieme projet de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <DeuxiemeProjet />
    </DefaultLayout>
  );
};

export default Page;
