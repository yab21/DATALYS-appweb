"use client";
import React from "react";
import Fichier from "@/components/TableauDeBordClient/Fichier";
import Projet from "./Projet/GererProjet";

const TableauDeBordClient: React.FC = () => {
  return (
    <>
      <h4 className="mb-10 text-body-2xlg font-semibold text-dark dark:text-white">
        Les différents projets du client
      </h4>
      <Projet />
      <Fichier />
    </>
  );
};

export default TableauDeBordClient;
