import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import TableauDeBordClient from "@/components/TableauDeBordClient/index";

export const metadata: Metadata = {
  title: "Tableau de bord client | DATALYS Consulting",
  description: "Le tableau de bord client",
};

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <DefaultLayout>
          <TableauDeBordClient />
        </DefaultLayout>
      </NextUIProvider>
    </>
  );
}
