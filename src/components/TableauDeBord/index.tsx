"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import Link from "next/link";
import { collection, query, orderBy, limit, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

interface Project {
  id: string;
  intitule: string;
  societe: string;
  domaine: string[] | string;
  createdAt: Date;
}

interface File {
  id: string;
  name: string;
  projectId: string;
  projectName: string;
  createdAt: Date;
}

const TableauDeBord: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecentProjects = async () => {
    try {
      const projectsRef = collection(db, "projects");
      const recentProjectsQuery = query(projectsRef, orderBy("createdAt", "desc"), limit(10));
      const querySnapshot = await getDocs(recentProjectsQuery);

      const projectList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate()
      } as Project));

      console.log("Projets récupérés:", projectList);
      setProjects(projectList);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    }
  };

  const fetchRecentFiles = async () => {
    try {
      const filesRef = collection(db, "files");
      const recentFilesQuery = query(filesRef, orderBy("createdAt", "desc"), limit(10));
      const querySnapshot = await getDocs(recentFilesQuery);

      const fileList = await Promise.all(querySnapshot.docs.map(async fileDoc => {
        const fileData = fileDoc.data();
        const projectDocRef = doc(db, "projects", fileData.projectId);
        const projectDocSnap = await getDoc(projectDocRef);
        const projectName = projectDocSnap.exists() ? projectDocSnap.data().intitule : "Projet inconnu";
        
        let createdAtDate;
        if (fileData.createdAt && typeof fileData.createdAt.toDate === 'function') {
          createdAtDate = fileData.createdAt.toDate();
        } else if (fileData.createdAt instanceof Date) {
          createdAtDate = fileData.createdAt;
        } else if (typeof fileData.createdAt === 'string') {
          createdAtDate = new Date(fileData.createdAt);
        } else {
          createdAtDate = new Date();
        }

        return {
          id: fileDoc.id,
          ...fileData,
          projectName,
          createdAt: createdAtDate
        } as File;
      }));

      console.log("Fichiers récupérés:", fileList);
      setFiles(fileList);
    } catch (error) {
      console.error("Erreur lors de la récupération des fichiers :", error);
    }
  };

  const truncateFileName = (fileName: string, maxLength: number = 15) => {
    if (fileName.length <= maxLength) return fileName;
    return `${fileName.substring(0, maxLength)}...`;
  };

  useEffect(() => {
    Promise.all([fetchRecentProjects(), fetchRecentFiles()])
      .then(() => {
        setLoading(false);
        console.log("Chargement terminé");
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des données récentes...</p>;
  }

  console.log("Rendu des tableaux avec:", { projects: projects.length, files: files.length });

  const projectColumns = [
    { key: "intitule", label: "Intitulé" },
    { key: "societe", label: "Entreprise" },
    { key: "domaine", label: "Domaine" },
    { key: "action", label: "Action" },
  ];

  const fileColumns = [
    { key: "name", label: "Nom du fichier" },
    { key: "projectName", label: "Projet" },
    { key: "createdAt", label: "Date d'ajout" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
      <div>
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Projets récents</h4>
        <Table aria-label="Projets récents">
          <TableHeader columns={projectColumns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={projects}>
            {(project) => (
              <TableRow key={project.id}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey === "action" ? (
                      <Button
                        as={Link}
                        href={`/tableaudebord/projet/pageprojet/${project.id}`}
                        color="primary"
                        size="sm"
                      >
                        Voir
                      </Button>
                    ) : (
                      getKeyValue(project, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Fichiers récents</h4>
        <Table aria-label="Fichiers récents">
          <TableHeader columns={fileColumns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={files}>
            {(file) => (
              <TableRow key={file.id}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey === "name" ? (
                      <span title={file.name}>{truncateFileName(file.name)}</span>
                    ) : columnKey === "createdAt" ? (
                      file.createdAt.toLocaleDateString()
                    ) : columnKey === "action" ? (
                      <Button
                        as={Link}
                        href={`/tableaudebord/projet/pageprojet/${file.projectId}`}
                        color="primary"
                        size="sm"
                      >
                        Voir le projet
                      </Button>
                    ) : (
                      getKeyValue(file, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableauDeBord;
