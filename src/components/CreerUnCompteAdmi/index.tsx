import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

const CreerUnCompteAdmi: React.FC = () => {
  return (
    <>
      <main className="flex w-full">
        <div className="relative hidden h-screen flex-1 items-center justify-center bg-[#001614] lg:flex">
          <div className="relative z-10 -mt-4 w-full max-w-md">
            <img src="/images/logo/logo.png" width={180} />
            <div className=" mt-16 space-y-3">
              <h3 className="text-3xl font-bold text-white">
                Infrastructure et analyse des données
              </h3>
              <p className="text-gray-300">
                La donnée est aujourd'hui un moteur de croissance pour beaucoup
                d'entreprises.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-screen flex-1 items-center justify-center">
          <div className="w-full max-w-2xl space-y-8 px-3 text-gray-600 md:px-6">
            <div className="">
              <Image
                src="/images/logo/logo.png"
                width={150}
                height={150}
                className="lg:hidden"
                alt=""
              />
              <div className="mt-5 space-y-2">
                <h3 className="text-2xl font-bold text-[#002925] sm:text-3xl">
                  Créer un compte
                </h3>
              </div>
            </div>
            <form className="space-y-5">
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <Input
                  type="text"
                  color="primary"
                  label="Nom"
                  variant="flat"
                  placeholder="Entrer votre nom"
                  className="max-w-xs"
                />
                <Input
                  type="text"
                  color="primary"
                  label="Prénom"
                  variant="flat"
                  placeholder="Entrer votre prénom"
                  className="max-w-xs"
                />
              </div>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <Input
                  type="text"
                  color="primary"
                  label="Nom d'utilisateur"
                  variant="flat"
                  placeholder="Entrer le nom d'utilisateur"
                  className="max-w-xs"
                />
                <Input
                  type="text"
                  color="primary"
                  label="Adresse e-mail"
                  variant="flat"
                  placeholder="Entrer l'adresse e-mail"
                  className="max-w-xs"
                />
              </div>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <Input
                  type="password"
                  color="primary"
                  label="Mot de passe"
                  variant="flat"
                  placeholder="Entrer le mot de passe"
                  className="max-w-xs"
                />
              </div>
              <Button
                as={Link}
                href="javascript:;"
                color="primary"
                variant="solid"
              >
                Valider
              </Button>
              <Link
                className="mt-1 flex justify-start font-thin text-dark"
                href="/connexion"
              >
                Page de connexion.
              </Link>
            </form>
            <Link
              className="mt-1 flex justify-start font-thin text-dark"
              href="/"
            >
              Accéder aux différents utilisateurs.
            </Link>
            <div className="flex justify-center px-3 pb-4 pt-5">
              <p className="text-primary">
                All Rights Reserved by
                <span className="font-medium"> DATALYS Consulting</span>.
                Designed and Developed by{" "}
                <Link className="text-dark" href="javascript:;">
                  LA VICTOIRE
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreerUnCompteAdmi;
