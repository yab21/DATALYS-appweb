"use client";
import React, { useState } from "react";
import {
  doc,
  getFirestore,
  setDoc,
  addDoc,
  collection,
  getDoc,
} from "firebase/firestore";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface CreateFolderModalProps {
  onFolderCreated: () => void;
  parentFolderId: string | null;
  projectId: string;
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({
  onFolderCreated,
  parentFolderId,
  projectId,
}) => {
  const [folderName, setFolderName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const db = getFirestore();

  const handleCreateFolder = async () => {
    try {
      console.log("Création du dossier avec:", {
        folderName,
        parentFolderId,
        projectId,
      });
      const newFolderRef = await addDoc(collection(db, "Folders"), {
        name: folderName,
        parentFolderId: parentFolderId,
        projectId: projectId,
        createdAt: new Date().toISOString(),
      });
      console.log("Nouveau dossier créé avec ID:", newFolderRef.id);

      // Vérification des données stockées
      const createdFolder = await getDoc(newFolderRef);
      console.log("Données du dossier stocké :", createdFolder.data());

      setFolderName(""); // Réinitialise le champ de texte
      onClose(); // Ferme la modal après création
      onFolderCreated(); // Appelle la fonction passée en props pour actualiser les dossiers
    } catch (error) {
      console.error("Erreur lors de la création du dossier : ", error);
    }
  };

  return (
    <>
      <Button size="md" onPress={onOpen}>
        Créer un dossier
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Créer un nouveau dossier</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="Nom du dossier"
              className="w-full rounded-md border-[1px] p-2 outline-none"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Annuler
            </Button>
            <Button color="primary" onPress={handleCreateFolder}>
              Créer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateFolderModal;
