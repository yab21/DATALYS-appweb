"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Iframe from "react-iframe";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import DataStatsOne from "@/components/TableauDeBord/DataStats/DataStatsOne";
import Fichier from "@/components/TableauDeBord/Fichier";

const TableauDeBord: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("2xl");
  const sizes = "2xl";

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <h4 className="mb-10 text-body-2xlg font-semibold text-dark dark:text-white">
        Bienvenue M. arthur ahman
      </h4>
      {/* <DataStatsOne /> */}
      {/* <Fichier /> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Projets récents
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Entreprise</th>
                  <th className="px-3 py-3">Domaine</th>
                  <th className="px-3 py-3">Voir</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Ouverture de l'infra
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Vision technologie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    ITCloud
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      as={Link}
                      href="/tableaudebord/pageprojet"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="voir"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z"
                        />
                        <path
                          fill="#fff"
                          d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Recouvrement du système
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    DATALYS Consulting
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Data center & énergie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      as={Link}
                      href="/tableaudebord/pageprojet"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="voir"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z"
                        />
                        <path
                          fill="#fff"
                          d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Ouverture de l'infra
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Vision technologie
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Réseau sécurité
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Button
                      as={Link}
                      href="/tableaudebord/pageprojet"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="voir"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z"
                        />
                        <path
                          fill="#fff"
                          d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start gap-6">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Derniers fichiers uploadés
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Nom</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Projet</th>
                  <th className="px-3 py-3">Consulter</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Revue du cahier de charge du projet 1
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Ouverture de l'infra
                  </td>
                  <td className="flex items-center whitespace-nowrap px-5 py-4">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                    {/* <Button
                      as={Link}
                      href="/tableaudebord/projet/modifier"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="modifier"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                        />
                      </svg>
                    </Button> */}
                    {/* <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      aria-label="supprimer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                      </svg>
                    </Button> */}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Planification du cahier de charge du projet 1
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    WORD
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Ouverture de l'infra
                  </td>
                  <td className="flex items-center whitespace-nowrap px-5 py-4">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                    {/* <Button
                      as={Link}
                      href="/tableaudebord/projet/modifier"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="modifier"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                        />
                      </svg>
                    </Button> */}
                    {/* <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      aria-label="supprimer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                      </svg>
                    </Button> */}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Revue du cahier de charge du projet 2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    PDF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                    Recouvrement du système
                  </td>
                  <td className="flex items-center whitespace-nowrap px-5 py-4">
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      onPress={() => handleOpen(size)}
                    >
                      <img
                        src="/images/icon/file-button.svg"
                        width={15}
                        height={15}
                      />
                    </Button>
                    {/* <Button
                      as={Link}
                      href="/tableaudebord/projet/modifier"
                      isIconOnly
                      size="sm"
                      color="primary"
                      aria-label="modifier"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                        />
                      </svg>
                    </Button> */}
                    {/* <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      aria-label="supprimer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                      </svg>
                    </Button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Modal
            size={size}
            isOpen={isOpen}
            onClose={onClose}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Le fichier uploadé
                  </ModalHeader>
                  <ModalBody>
                    <Iframe
                      src="/file/CAHIER DE CHARGES FONCTIONNEL - DATALYS-Consulting.pdf"
                      width="640px"
                      height="320px"
                    ></Iframe>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Fermer
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Terminer
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TableauDeBord;
