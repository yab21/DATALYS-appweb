"use client";
import React from "react";
import DataStatsOne from "@/components/TableauDeBordClient/DataStats/DataStatsOne";
import Fichier from "@/components/TableauDeBordClient/Fichier";

const TableauDeBordClient: React.FC = () => {
  return (
    <>
      <h4 className="mb-10 text-body-2xlg font-semibold text-dark dark:text-white">
        Les différents projets du client
      </h4>
      <DataStatsOne />
      <Fichier />
    </>
  );
};

export default TableauDeBordClient;
