import React from "react";
import Link from "next/link";

const DataStatsOne: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <Link href="/tableaudebordclient/dossier">
          <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#4aa9b8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  Projet 1
                </h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/tableaudebordclient/dossier">
          <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#f9c954]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  Projet 2
                </h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/tableaudebordclient/dossier">
          <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[#3183ba]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  Projet 3
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DataStatsOne;
