"use client";
import React from "react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const ModifierProjet = () => {
  return (
    <>
      <Breadcrumb pageName="Modifier le projet" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Modifier le projet
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Intitulé du projet"
                variant="bordered"
                color="primary"
                placeholder="Entrer l'Intitulé du projet"
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Nom de la société"
                variant="bordered"
                color="primary"
                placeholder="Entrer le nom de la société"
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Nom du chef de projet"
                variant="bordered"
                color="primary"
                placeholder="Entrer le nom du chef de projet"
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
              >
                Modifier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifierProjet;
