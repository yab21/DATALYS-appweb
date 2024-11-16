import React from "react";
import Connexion from "@/components/Connexion";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Connexion | DATALYS Consulting",
  description: "Le page de connexion",
};

const Page = () => {
  return <Connexion />;
};

export default Page;
