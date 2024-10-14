"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";

const ModifierProjet = () => {
  const [projectData, setProjectData] = useState({
    intitule: "",
    societe: "",
    chefDeProjet: "",
  });

  const projectId = window.location.pathname.split("/").pop(); // Récupérer l'ID du projet depuis l'URL

  useEffect(() => {
    const fetchProject = async () => {
      if (projectId) {
        const docRef = doc(db, "projects", projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProjectData(docSnap.data() as typeof projectData);
        } else {
          console.log("Projet non trouvé");
        }
      }
    };
    fetchProject();
  }, [projectId]);

  const handleUpdate = async () => {
    const docRef = doc(db, "projects", projectId);
    await updateDoc(docRef, projectData);
    window.location.href = "/tableaudebord/projet/gerer"; // Redirection après modification
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  return (
    <>
      <Breadcrumb pageName="Modifier le projet" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Modifier le projet
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Intitulé du projet"
                variant="bordered"
                color="primary"
                name="intitule"
                value={projectData.intitule}
                onChange={handleChange}
                className="text-sm font-medium md:text-base"
              />
              <Input
                type="text"
                label="Nom de la société"
                variant="bordered"
                color="primary"
                name="societe"
                value={projectData.societe}
                onChange={handleChange}
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Nom du chef de projet"
                variant="bordered"
                color="primary"
                name="chefDeProjet"
                value={projectData.chefDeProjet}
                onChange={handleChange}
                className="text-sm font-medium md:text-base"
              />
            </div>
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
                onPress={handleUpdate}
              >
                Modifier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifierProjet;
