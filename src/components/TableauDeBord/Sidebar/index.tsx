"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/TableauDeBord/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "Accueil",
    menuItems: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
            />
          </svg>
        ),
        label: "Tableau de bord",
        route: "/tableaudebord",
      },
    ],
  },
  {
    name: "Gestion",
    menuItems: [
      // {
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="fill-current"
      //       width="30"
      //       height="30"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         fill="fill-current"
      //         d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
      //       />
      //     </svg>
      //   ),
      //   label: "Dossier",
      //   route: "#",
      //   children: [
      //     { label: "Ajouter", route: "/tableaudebord/lesdossiers/ajouter" },
      //     {
      //       label: "Gérer",
      //       route: "/tableaudebord/lesdossiers",
      //     },
      //   ],
      // },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="fill-current"
              d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z"
            />
            <path
              fill="fill-current"
              d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25"
            />
          </svg>
        ),
        label: "Projet",
        route: "#",
        children: [
          { label: "Ajouter", route: "/tableaudebord/projet/ajouter" },
          {
            label: "Gérer",
            route: "/tableaudebord/projet/gerer",
          },
        ],
      },
    ],
  },
  // {
  //   name: "Les différents domaines",
  //   menuItems: [
  //     {
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="30"
  //           className="text- fill-current"
  //           height="30"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             fill="currentColor"
  //             d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"
  //           />
  //         </svg>
  //       ),
  //       label: "ITCloud",
  //       route: "/tableaudebord/itcloud",
  //     },
  //     {
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="30"
  //           height="30"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             fill="currentColor"
  //             d="M13 19h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-1.66C8.07 16.13 6 13 6 9.67v-4L12 3l6 2.67v4c0 3.33-2.07 6.46-5 7.67zM12 5L8 6.69V10h4zm0 5v6c1.91-.47 4-2.94 4-5v-1z"
  //           />
  //         </svg>
  //       ),
  //       label: "Sécurité réseau",
  //       route: "/tableaudebord/securitereseau",
  //     },
  //     {
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="30"
  //           height="30"
  //           viewBox="0 0 32 32"
  //         >
  //           <path
  //             fill="currentColor"
  //             d="M28 10h-5V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 28V12h5v2H7v2h2v2H7v2h2v2H7v2h2v4Zm17 0H11V6h10Zm7 0h-5v-4h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h5Z"
  //           />
  //           <path fill="#000" d="M14 8h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z" />
  //         </svg>
  //       ),
  //       label: "Data center & énergie",
  //       route: "/tableaudebord/datacenter&energie",
  //     },
  //   ],
  // },
  {
    name: "AUTRES",
    menuItems: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
            />
          </svg>
        ),
        label: "Authentication",
        route: "#",
        children: [
          {
            label: "Se déconnecter",
            route: "/connexion",
          },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/tableaudebord">
            <img
              width={176}
              height={32}
              src={"/images/logo/logo-2.png"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "300px", height: "100px" }}
            />
            <img
              width={176}
              height={32}
              src={"/images/logo/logo.png"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "300px", height: "100px" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
