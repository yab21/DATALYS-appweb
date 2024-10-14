"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { domaines } from "./domaineData";
import { db } from "@/firebase/firebaseConfig"; // Assurez-vous que Firestore est bien importé
import { collection, addDoc } from "firebase/firestore"; // Pour ajouter des documents dans Firestore

const CreerProjet = () => {
  const [formData, setFormData] = useState({
    intitule: "",
    societe: "",
    chefDeProjet: "",
    domaine: [] as string[], // Utiliser un tableau de chaînes de caractères pour les domaines
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selected: Set<string>) => {
    // Convertir les éléments sélectionnés en tableau
    setFormData({ ...formData, domaine: Array.from(selected) });
  };

  const handleSubmit = async () => {
    
    setError(null);
    
    // Vérifier que tous les champs sont remplis
    if (!formData.intitule || !formData.societe || !formData.chefDeProjet || formData.domaine.length === 0) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setLoading(true);

    try {
      // Enregistrer le projet dans Firestore
      const docRef = await addDoc(collection(db, "projects"), {
        intitule: formData.intitule,
        societe: formData.societe,
        chefDeProjet: formData.chefDeProjet,
        domaine: formData.domaine, // Un tableau de chaînes de caractères
        createdAt: new Date(), // Ajout de la date de création
      });

      console.log("Projet créé avec ID :", docRef.id);
      alert("Projet créé avec succès !");
    } catch (error: any) {
      console.error("Erreur lors de la création du projet :", error);
      setError("Erreur lors de la création du projet. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Créer un projet" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full max-w-full p-2">
            <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
              Créer un projet
            </h3>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Intitulé du projet"
                variant="bordered"
                color="primary"
                placeholder="Entrer l'intitulé du projet"
                className="text-sm font-medium md:text-base"
                name="intitule"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="Nom de la société"
                variant="bordered"
                color="primary"
                placeholder="Entrer le nom de la société"
                className="text-sm font-medium md:text-base"
                name="societe"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:py-4">
              <Input
                type="text"
                label="Nom du chef de projet"
                variant="bordered"
                color="primary"
                placeholder="Entrer le nom du chef de projet"
                className="text-sm font-medium md:text-base"
                name="chefDeProjet"
                onChange={handleChange}
                required
              />
              <Select
                label="Domaine du projet"
                color="primary"
                variant="bordered"
                placeholder="Choisir le domaine de projet"
                selectionMode="single"
                className="text-sm font-medium md:text-base"
                onSelectionChange={handleSelectChange}
              >
                {domaines.map((domaine) => (
                  <SelectItem key={domaine.key} value={domaine.label}>
                    {domaine.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-center px-2 py-2">
              <Button
                color="primary"
                className="w-64 flex-none"
                variant="solid"
                size="md"
                onClick={handleSubmit}
                isDisabled={loading}
              >
                {loading ? "Création..." : "Créer"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreerProjet;
