import React from "react";
import Breadcrumb from "@/components/TableauDeBordClient/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Utilisateur = () => {
  return (
    <>
      <Breadcrumb pageName="Les différents projets" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px]">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full items-center justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Les différents projets
              </h3>
            </div>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-4 md:py-4">
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 1
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 2
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 3
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 4
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 5
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 6
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 7
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-col items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="6" r="1" fill="#5eb7be" />
                    <path
                      fill="#5eb7be"
                      d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
                    />
                    <path
                      fill="#5eb7be"
                      d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Exploitation des sites 8
                  </h5>
                  <Button
                    // as={Link}
                    // href={`/tableaudebordclient/projetpersonnel/informationduprojet/${project.id}`}
                    color="primary"
                    size="sm"
                    variant="bordered"
                  >
                    Voir
                  </Button>
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
