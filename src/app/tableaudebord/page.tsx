import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBord/Layouts/DefaultLaout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import AdminOnly from "@/components/AdminOnly/index"; // Importer le composant AdminOnly
import TableauDeBord from "@/components/TableauDeBord/index";

export const metadata: Metadata = {
  title: "Tableau de bord | DATALYS Consulting",
  description: "Le tableau de bord",
};

export default function Home() {
  return (
      <AdminOnly>
      {/* Contenu uniquement accessible aux administrateurs */}
      <NextUIProvider>
        <DefaultLayout>
          <TableauDeBord />
        </DefaultLayout>
      </NextUIProvider>
    </AdminOnly>
  );
}
