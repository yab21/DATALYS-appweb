"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Project {
  id: string;
  chefDeProjet: string;
  societe: string;
  intitule: string;
  domaine: string[]; // Domaine est un tableau de chaînes
}

const GestionProjet = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedDomaine, setSelectedDomaine] = useState<Set<string>>(new Set(["all"]));
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<string>("blur");  // Par défaut à 'blur'

  // Récupérer les projets depuis Firestore
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (project) =>
            project.chefDeProjet &&
            project.societe &&
            project.intitule &&
            project.domaine
        ); // Assurez-vous que 'domaine' existe
      setProjects(projectList);
      setFilteredProjects(projectList);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filtrer les projets par domaine
  useEffect(() => {
    if (selectedDomaine.has("all")) {
      setFilteredProjects(projects);
    } else {
      const selectedValues = Array.from(selectedDomaine);
      setFilteredProjects(
        projects.filter((project) => {
          const domaines = project.domaine; // domaine est un tableau
          return selectedValues.some((value) => domaines.includes(value));
        })
      );
    }
  }, [selectedDomaine, projects]);

  // Ouvrir le modal pour confirmer la suppression
  const openDeleteModal = (projectId: string) => {
    console.log(`Modal ouvert pour le projet ID: ${projectId}`);
    setProjectToDelete(projectId);
    onOpen();
  };

  // Confirmer la suppression
  const confirmDelete = async () => {
    console.log("Confirmation de suppression");
    if (projectToDelete) {
      try {
        await deleteDoc(doc(db, "projects", projectToDelete));
        setFilteredProjects(
          filteredProjects.filter((project) => project.id !== projectToDelete)
        );
        onClose();
        setProjectToDelete(null);
      } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
      }
    }
  };

  // Annuler la suppression
  const cancelDelete = () => {
    console.log("Suppression annulée");
    onClose();
    setProjectToDelete(null);
  };

  const handleEdit = (projectId: string) => {
    console.log(`Redirection pour la modification du projet ID: ${projectId}`);
    window.location.href = `/tableaudebord/projet/modifier/${projectId}`;
  };

  const handleVoir = (projectId: string) => {
    console.log(`Redirection pour voir le projet avec ID: ${projectId}`);
    window.location.href = `/tableaudebord/projet/pageprojet/${projectId}`;
  };
  

  // Handle selection change
  const handleSelectChange = (selected: Set<string>) => {
    setSelectedDomaine(selected);
  };

  return (
    <>
      <Breadcrumb pageName="Gestion de projet" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start gap-6">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Gestion de projet
              </h3>
              <Select
                label="Domaine du projet"
                color="primary"
                variant="underlined"
                placeholder="Choisir un domaine"
                className="max-w-sm text-sm font-medium md:text-base"
                selectionMode="single"
                onSelectionChange={handleSelectChange}
                selectedKeys={selectedDomaine}
              >
                <SelectItem key="all">Tous les domaines</SelectItem>
                <SelectItem key="itcloud">ITCloud</SelectItem>
                <SelectItem key="sécurité réseau">Sécurité réseau</SelectItem>
                <SelectItem key="data center & énergie">
                  Data center & énergie
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            {/* Ajoute une colonne pour montrer le domaine dans le tableau */}
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Domaine</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                {filteredProjects && filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id}>
                      {/* Affichage de l'intitulé du projet en premier */}
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.intitule}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.chefDeProjet}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.societe}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.domaine.join(", ")}
                      </td>
                      {/* Ajout du bouton "Afficher" à droite */}
                      <td className="flex items-center gap-2 whitespace-nowrap px-5 py-4">
                        <Button
                          onClick={() => handleVoir(project.id)}
                          isIconOnly
                          size="sm"
                          color="success"
                          aria-label="afficher"
                        >
                          Afficher
                        </Button>
                        <Button
                          onClick={() => handleEdit(project.id)}
                          isIconOnly
                          size="sm"
                          color="primary"
                          aria-label="modifier"
                        >
                          Modifier
                        </Button>
                        <Button
                          onClick={() => openDeleteModal(project.id)}
                          isIconOnly
                          size="sm"
                          color="danger"
                          aria-label="supprimer"
                        >
                          Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      Aucun projet trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      {/* Modal pour confirmer la suppression */}
      <Modal
        backdrop={backdrop}  // Utilise l'effet de fond sélectionné
        isOpen={isOpen}
        onClose={cancelDelete}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmation de suppression</ModalHeader>
              <ModalBody>
                <p>
                  Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={confirmDelete}>
                  Supprimer
                </Button>
                <Button color="primary" onPress={onClose}>
                  Annuler
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
  
};

export default GestionProjet;
