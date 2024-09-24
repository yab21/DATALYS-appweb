import React from "react";
import ConnexionClient from "@/components/ConnexionClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion client | DATALYS Consulting",
  description: "Le page de connexion du client",
};

const Page = () => {
  return <ConnexionClient />;
};

export default Page;
