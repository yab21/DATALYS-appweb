<<<<<<< HEAD
import React from "react";
import { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Connexion from "@/components/Connexion";
import Image from "next/image";
=======
import { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Connexion from "@/components/Connexion";
>>>>>>> 616a4022b68eca135ddaeb787a8e2c96c5cbedcb

export const metadata: Metadata = {
  title: "DATALYS Consulting application web",
  description: "La page de connexion",
};

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Connexion />
      </NextUIProvider>
    </>
  );
}
