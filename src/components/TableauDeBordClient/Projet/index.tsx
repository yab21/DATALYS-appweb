"use client";
import React from "react";
import Link from "next/link";
import { Select, SelectItem } from "@nextui-org/select";
import Breadcrumb from "@/components/TableauDeBordClient/Breadcrumbs/Breadcrumb";

const PremierProjet = () => {
  return (
    <>
      <Breadcrumb pageName="Liste des projets" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start gap-6">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste des projets
              </h3>
              <Select
                label="Domaine du projet"
                color="primary"
                variant="underlined"
                placeholder="ITCloud"
                className="max-w-sm text-sm font-medium md:text-base"
              >
                <SelectItem key="itcloud">ITCloud</SelectItem>
              </Select>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    DATALYS Consulting
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Yves etien
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Vision technologie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Maintenance un système
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Xcable agency
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-500">
                    Conclus
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start gap-6">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste des projets
              </h3>
              <Select
                label="Domaine du projet"
                color="primary"
                variant="underlined"
                placeholder="Sécurité réseau"
                className="max-w-sm text-sm font-medium md:text-base"
              >
                <SelectItem key="sécurité réseau">Sécurité réseau</SelectItem>
              </Select>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Etat</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    DATALYS Consulting
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Yves etien
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Vision technologie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Maintenance un système
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Xcable agency
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-500">
                    Conclus
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start gap-6">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Liste des projets
              </h3>
              <Select
                label="Domaine du projet"
                color="primary"
                variant="underlined"
                placeholder="Data center & énergie"
                className="max-w-sm text-sm font-medium md:text-base"
              >
                <SelectItem key="data center">Data center & énergie</SelectItem>
              </Select>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Etat</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                <tr>
                  <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                    <img
                      src="/images/fav.PNG"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <span className="block text-sm font-medium text-dark dark:text-white">
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    DATALYS Consulting
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Yves etien
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Vision technologie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Maintenance un système
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-orange-500">
                    En cours
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
                        <Link href="/tableaudebordclient/dossier">
                          Arnaud charles
                        </Link>
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Xcable agency
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Contrat de l'ouverture du projet
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-green-500">
                    Conclus
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

export default PremierProjet;
