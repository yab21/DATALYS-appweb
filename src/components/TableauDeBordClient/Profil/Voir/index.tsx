import React from "react";
import Breadcrumb from "@/components/TableauDeBordClient/Breadcrumbs/Breadcrumb";
import Image from "next/image";

const VoirProfil = () => {
  return (
    <>
      <Breadcrumb pageName="Voir votre profil" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-12 gap-6 px-4">
              <div className="col-span-3">
                <div className="rounded-lg border-stroke bg-white p-6 shadow dark:border-stroke-dark dark:bg-gray-dark">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/user.png"
                      className="mb-4 shrink-0 rounded-full bg-gray-300"
                      width={128}
                      height={128}
                      alt="person"
                    ></Image>
                    <h1 className="text-xl font-bold">Alma Arthur</h1>
                    <p className="text-gray-900 dark:text-white">
                      Chef de projet 1
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-9">
                <div className="rounded-lg border-stroke bg-white p-6 shadow dark:border-stroke-dark dark:bg-gray-dark">
                  <h2 className="mb-4 text-xl font-bold">Voir Votre profil</h2>
                  <div className="mt-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 gap-2 px-2 py-6 md:grid-cols-2 md:gap-4 md:py-4">
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Nom: <span className="font-light">Alma</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Prénom: <span className="font-light">Arthur</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Nom d'utilisateur:{" "}
                        <span className="font-light">Arthur03</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Votre fonction:{" "}
                        <span className="font-light">
                          Chef projet de DATALYS Consulting
                        </span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Société:{" "}
                        <span className="font-light">DATALYS Consulting</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Département de la société:{" "}
                        <span className="font-light">ITCloud</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Nom du projet:{" "}
                        <span className="font-light">Projet 1</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Domaine du projet:{" "}
                        <span className="font-light">ITCloud</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Adresse e-mail:{" "}
                        <span className="font-light">arthur03@gmai.com</span>
                      </p>
                      <p className="text-base font-extrabold tracking-wide text-dark dark:text-white">
                        Mot de passe:{" "}
                        <span className="font-light">arthur03</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoirProfil;
