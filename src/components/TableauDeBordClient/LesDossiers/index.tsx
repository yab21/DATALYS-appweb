import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Breadcrumb from "@/components/TableauDeBordClient/Breadcrumbs/Breadcrumb";

const LesDossiers: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Les différents dossiers" />
      <h4 className="mb-10 text-body-2xlg font-semibold text-dark dark:text-white">
        Les différents dossiers du client de DATALYS Consulting
      </h4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 1
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 2
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 3
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 4
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 5
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text- fill-current"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
              />
            </svg>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                Dossier 6
              </h4>
              <Button
                as={Link}
                href="/tableaudebordclient/dossier/voir"
                isIconOnly
                size="sm"
                color="primary"
                aria-label="voir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LesDossiers;
