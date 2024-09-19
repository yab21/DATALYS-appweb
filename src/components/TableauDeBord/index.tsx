"use client";
import React from "react";
import DataStatsOne from "@/components/TableauDeBord/DataStats/DataStatsOne";
import Fichier from "@/components/TableauDeBord/Fichier";

const TableauDeBord: React.FC = () => {
  return (
    <>
      <h4 className="mb-10 text-body-2xlg font-semibold text-dark dark:text-white">
        Les différents secteurs de DATALYS Consulting
      </h4>
      <DataStatsOne />
      <Fichier />
    </>
  );
};

export default TableauDeBord;
