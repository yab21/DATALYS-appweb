"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button, Modal, Text } from "@nextui-org/react"; // Assurez-vous d'importer les composants nécessaires
import Link from "next/link";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

interface Project {
  id: string;
  chefDeProjet: string;
  societe: string;
  intitule: string;
  domaine: string;
}

const GestionProjet = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedDomaine, setSelectedDomaine] = useState<string>("all");
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null); // ID du projet à supprimer
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false); // Pour contrôler l'affichage du modal

  // Récupérer les projets depuis Firestore
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectList);
      setFilteredProjects(projectList); // Initialiser avec tous les projets
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filtrer les projets par domaine
  const handleSelectChange = (selected: string) => {
    setSelectedDomaine(selected);
    if (selected === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.domaine.toLowerCase().includes(selected.toLowerCase()),
        ),
      );
    }
  };

  // Ouvrir le modal pour confirmer la suppression
  const openDeleteModal = (projectId: string) => {
    setProjectToDelete(projectId); // Enregistrer l'ID du projet à supprimer
    setDeleteModalVisible(true); // Ouvrir le modal
  };

  // Confirmer la suppression
  const confirmDelete = async () => {
    if (projectToDelete) {
      try {
        await deleteDoc(doc(db, "projects", projectToDelete));
        setFilteredProjects(
          filteredProjects.filter((project) => project.id !== projectToDelete),
        );
        setDeleteModalVisible(false); // Fermer le modal après suppression
        setProjectToDelete(null); // Réinitialiser l'ID du projet à supprimer
      } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
      }
    }
  };

  // Annuler la suppression
  const cancelDelete = () => {
    setDeleteModalVisible(false); // Fermer le modal
    setProjectToDelete(null); // Réinitialiser l'ID du projet à supprimer
  };

  const handleEdit = (projectId: string) => {
    window.location.href = `/tableaudebord/projet/modifier/${projectId}`;
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
                onSelectionChange={(key) => handleSelectChange(key.toString())}
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
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.intitule}
                      </td>
                      <td className="gap-x-3 whitespace-nowrap px-3 py-3 text-dark dark:text-white">
                        {project.chefDeProjet}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.societe}
                      </td>
                      <td className="flex items-center gap-2 whitespace-nowrap px-5 py-4">
                        <Button
                          as={Link}
                          href="/tableaudebord/pageprojet"
                          isIconOnly
                          size="sm"
                          color="primary"
                          aria-label="voir"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
                            />
                          </svg>
                        </Button>
                        <Button
                          onPress={() => handleEdit(project.id)}
                          isIconOnly
                          size="sm"
                          color="warning"
                          aria-label="modifier"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                            />
                          </svg>
                        </Button>
                        <Button
                          onPress={() => openDeleteModal(project.id)}
                          isIconOnly
                          size="sm"
                          color="danger"
                          aria-label="supprimer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                            />
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-4 text-center">
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
        closeButton
        aria-labelledby="modal-title"
        open={isDeleteModalVisible}
        onClose={cancelDelete}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Confirmation de suppression
          </Text>
        </Modal.Header>
        <Modal.Body>
          <p>
            Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est
            irréversible.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={confirmDelete}>
            Supprimer
          </Button>
          <Button auto onPress={cancelDelete}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GestionProjet;
