"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Breadcrumb from "@/components/TableauDeBordClient/Breadcrumbs/Breadcrumb";

const TroisiemeProjet = () => {
  return (
    <>
      <Breadcrumb pageName="Troisieme projet" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste des projets
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom</th>
                  <th className="px-3 py-3">Département</th>
                  <th className="px-3 py-3">Pays</th>
                  <th className="px-3 py-3">Ville</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        DATALYS Consulting
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ITCloud
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Côte d'Ivoire
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        DATALYS Consulting
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Data center & energie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Guinée
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Conakry
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        DATALYS Consulting
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ITCloud
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Côte d'Ivoire
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Abidjan
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        DATALYS Consulting
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Data center & energie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Guinée
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Conakry
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TroisiemeProjet;
