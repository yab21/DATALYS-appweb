import React from "react";
import { Metadata } from "next";
import { ParentFolderIdProvider } from "@/context/ParentFolderIdContext";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import PageProjet from "@/components/TableauDeBordClient/Projet/VoirProjet";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const metadata: Metadata = {
  title: "Voir le projet | DATALYS Consulting",
  description: "La page pour voir un projet de DATALYS Consulting",
};

// Ajoutez cette fonction pour la génération statique
export async function generateStaticParams() {
  const projectsRef = collection(db, "projects");
  const projectsSnapshot = await getDocs(projectsRef);

  return projectsSnapshot.docs.map((doc) => ({
    id: doc.id,
  }));
}

// Ajoutez cette ligne pour activer l'ISR
export const revalidate = 3600; // Revalider toutes les heures

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <ParentFolderIdProvider>
      <DefaultLayout>
        <PageProjet id={params.id} />
      </DefaultLayout>
    </ParentFolderIdProvider>
  );
};

export default Page;
