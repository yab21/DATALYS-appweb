import React from "react";
import ModifierProjet from "@/components/TableauDeBordClient/Projet/ModifierProjet";
import { Metadata } from "next";
import DefaultLayout from "@/components/TableauDeBordClient/Layouts/DefaultLaout";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const metadata: Metadata = {
  title: "Modifier le projet | DATALYS Consulting",
  description: "La page de modification du projet de DATALYS Consulting",
};

export async function generateStaticParams() {
  const projectsRef = collection(db, "projects");
  const projectsSnapshot = await getDocs(projectsRef);

  return projectsSnapshot.docs.map((doc) => ({
    id: doc.id,
  }));
}

export const revalidate = 3600; // Revalider toutes les heures

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <DefaultLayout>
      <ModifierProjet id={params.id} />
    </DefaultLayout>
  );
};

export default Page;
