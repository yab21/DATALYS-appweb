"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem, Button, Modal, ModalBody, ModalHeader, ModalFooter } from "@nextui-org/react";
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
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

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
        ); // Ensure 'domaine' exists
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
  const handleSelectChange = (selected: string) => {
    setSelectedDomaine(selected);
    if (selected === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => {
          const domaine = project.domaine || "";
          return domaine.toLowerCase().includes(selected.toLowerCase());
        })
      );
    }
  };

  // Ouvrir le modal pour confirmer la suppression
  const openDeleteModal = (projectId: string) => {
    setProjectToDelete(projectId);
    setDeleteModalVisible(true);
  };

  // Confirmer la suppression
  const confirmDelete = async () => {
    if (projectToDelete) {
      try {
        await deleteDoc(doc(db, "projects", projectToDelete));
        setFilteredProjects(
          filteredProjects.filter((project) => project.id !== projectToDelete)
        );
        setDeleteModalVisible(false);
        setProjectToDelete(null);
      } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
      }
    }
  };

  // Annuler la suppression
  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setProjectToDelete(null);
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
                onSelectionChange={(key) => handleSelectChange(key as string)}
                selectedKeys={[selectedDomaine]}
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
                  <th className="px-3 py-3">Nom du chef de projet</th>
                  <th className="px-3 py-3">Nom de la société</th>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                {filteredProjects && filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="flex items-center gap-x-3 whitespace-nowrap px-3 py-3">
                        <div>
                          <span className="block text-sm font-medium text-dark dark:text-white">
                            {project.chefDeProjet}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.societe}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.intitule}
                      </td>
                      <td className="flex items-center gap-2 whitespace-nowrap px-5 py-4">
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
                    <td colSpan={4} className="text-center py-4">
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
      <Modal isOpen={isDeleteModalVisible} onClose={cancelDelete}>
        <ModalHeader>
          <h2 className="text-lg font-semibold">Confirmation de suppression</h2>
        </ModalHeader>
        <ModalBody>
          <p>Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>
            Supprimer
          </Button>
          <Button onClick={cancelDelete}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default GestionProjet;
