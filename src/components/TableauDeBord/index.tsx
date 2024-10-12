"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"; // Import des méthodes Firestore
import { db } from "@/firebase/firebaseConfig"; // Import Firestore config

const TableauDeBord: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]); // State pour stocker les projets
  const [loading, setLoading] = useState(true); // State pour gérer le chargement

  // Fonction pour récupérer les projets récents
  const fetchRecentProjects = async () => {
    try {
      const projectsRef = collection(db, "projects");
      const recentProjectsQuery = query(projectsRef, orderBy("createdAt", "desc"), limit(10));
      const querySnapshot = await getDocs(recentProjectsQuery);

      const projectList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProjects(projectList);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentProjects();
  }, []);

  if (loading) {
    return <p>Chargement des projets récents...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                Projets récents
              </h3>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border shadow-sm">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b bg-gray-1 font-medium text-dark dark:bg-gray-dark dark:text-white">
                <tr>
                  <th className="px-3 py-3">Intitulé du projet</th>
                  <th className="px-3 py-3">Entreprise</th>
                  <th className="px-3 py-3">Domaine</th>
                  <th className="px-3 py-3">Voir</th>
                </tr>
              </thead>
              <tbody className="mb-3 divide-y text-gray-600">
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <tr key={project.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.intitule}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {project.societe}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-dark dark:text-white">
                        {Array.isArray(project.domaine) ? project.domaine.join(", ") : project.domaine || "Non spécifié"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <Button
                          as={Link}
                          href={`/tableaudebord/projet/pageprojet/${project.id}`} // Utilisation correcte de project.id
                          isIconOnly
                          size="sm"
                          color="primary"
                          aria-label="voir"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
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
    </>
  );
};

export default TableauDeBord;
