"use client";

import React from "react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

const Utilisateur = () => {
  return (
    <>
      <Breadcrumb pageName="La liste des utilisateurs" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px]">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full items-center justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                La liste des utilisateurs
              </h3>
              {/* <Dropdown>
                <DropdownTrigger>
                  <Button
                    color="primary"
                    variant="shadow"
                    className="flex items-center"
                  >
                    Créer un compte{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      />
                    </svg>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  <DropdownItem
                    key="admi"
                    href="/tableaudebord/creationduncompte"
                  >
                    Administrateur
                  </DropdownItem>
                  <DropdownItem
                    key="client"
                    href="/tableaudebord/creationduncompte"
                  >
                    Client
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-4 md:py-4">
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Antoine Ruge
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Rodrigue Angie
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de xxxxxx
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Reseau securite
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Edvige Estelle
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Serges Matthieu
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Antoine Ruge
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Rodrigue Angie
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de xxxxxx
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Reseau securite
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Edvige Estelle
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center pb-6">
                  <Image
                    className="mb-3 rounded-full shadow-lg"
                    src="/images/user.png"
                    alt="user"
                    width={100}
                    height={100}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Serges Matthieu
                  </h5>
                  <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    DG de Vision Technology
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ITCloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilisateur;
