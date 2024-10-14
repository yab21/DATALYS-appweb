import React from "react";
import SecurityNetwork from "@/components/TableauDeBord/SecurityNetwork";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBord/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Sécurité réseau | DATALYS Consulting",
  description: "La page de sécurité réseau de DATALYS Consulting",
};

const Page = () => {
  return (
    <DefaultLayout>
      <SecurityNetwork />
    </DefaultLayout>
  );
};

export default Page;
