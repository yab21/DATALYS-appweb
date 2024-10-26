"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/ClickOutside";
import { doc, getDoc } from "firebase/firestore";
import DeconnexionButton from "@/components/DeconnexionClient"; // Importer ton bouton de déconnexion
import { auth, db } from "@/firebase/firebaseConfig"; // Assurez-vous d'importer Firebase correctement

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });

  // Fonction pour récupérer les informations utilisateur depuis Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid); // Assurez-vous que la collection est correcte
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName({
              firstName: userData.firstName,
              lastName: userData.lastName,
            });
          }
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des données utilisateur :",
            error,
          );
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="h-12 w-12 rounded-full">
          <img
            width={50}
            height={50}
            src="/images/fav.PNG"
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
            className="overflow-hidden rounded-full"
          />
        </span>

        <span className="flex items-center gap-2 font-medium text-dark dark:text-dark-6">
          {/* Remplacement de "Client" par l'initiale du prénom et le nom */}
          <span className="hidden lg:block">
            {userName.firstName.charAt(0)}. {userName.lastName}
          </span>

          <svg
            className={`fill-current duration-200 ease-in ${dropdownOpen && "rotate-180"}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
              fill=""
            />
          </svg>
        </span>
      </Link>

      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-7.5 flex w-[280px] flex-col rounded-lg border-[0.5px] border-stroke bg-white shadow-default dark:border-dark-3 dark:bg-gray-dark`}
        >
          <div className="flex items-center gap-2.5 px-5 pb-5.5 pt-3.5">
            <span className="relative block h-12 w-12 rounded-full">
              <img
                width={50}
                height={50}
                src="/images/fav.PNG"
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="User"
                className="overflow-hidden rounded-full"
              />

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green dark:border-gray-dark"></span>
            </span>

            <span className="block">
              <span className="block font-medium text-dark dark:text-white">
                DATALYS Consulting
              </span>
            </span>
          </div>
          <ul className="flex flex-col gap-1 border-y-[0.5px] border-stroke p-2.5 dark:border-dark-3">
            <li>
              <Link
                href="/connexionclient"
                className="flex w-full items-center rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
              >
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4B5563"
                      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                    />
                  </svg>
                  <DeconnexionButton />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
