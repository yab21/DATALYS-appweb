"use client"
import React, { useState } from "react";
import { doc, getFirestore, setDoc, addDoc, collection, getDoc } from "firebase/firestore";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface CreateFolderModalProps {
  onFolderCreated: () => void;
  parentFolderId: string | null;
  projectId: string;
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({ onFolderCreated, parentFolderId, projectId }) => {
  const [folderName, setFolderName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const db = getFirestore();

  const handleCreateFolder = async () => {
    try {
      console.log("Creating folder with:", { folderName, parentFolderId, projectId });
      const newFolderRef = await addDoc(collection(db, "Folders"), {
        name: folderName,
        parentFolderId: parentFolderId,
        projectId: projectId,
        createdAt: new Date().toISOString(),
      });
      console.log("New folder created with ID:", newFolderRef.id);
      
      // Vérification des données stockées
      const createdFolder = await getDoc(newFolderRef);
      console.log("Stored folder data:", createdFolder.data());

      setFolderName(""); // Réinitialise le champ de texte
      onClose(); // Ferme la modal après création
      onFolderCreated(); // Appelle la fonction passée en props pour actualiser les dossiers
    } catch (error) {
      console.error("Error creating folder: ", error);
    }
  };

  return (
    <>
      <Button onPress={onOpen}>Create Folder</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Create New Folder</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="Folder Name"
              className="p-2 border-[1px] outline-none rounded-md w-full"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleCreateFolder}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateFolderModal;
