"use client"
import React, { useState, useContext } from "react";
import { ShowToastContext } from "@/context/ShowToastContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import Toast from "@/components/TableauDeBord/Projet/VoirProjet/Toast";

interface UploadFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFileUploaded: () => void;
  parentFolderId: string | null;
  projectId: string;
}

const UploadFileModal: React.FC<UploadFileModalProps> = ({ isOpen, onClose, onFileUploaded, parentFolderId, projectId }) => {
  const { setShowToastMsg } = useContext(ShowToastContext) || {};
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const db = getFirestore();
  const storage = getStorage();

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setError("Veuillez sélectionner un fichier avant de l'uploader.");
      setShowToast(true);
      return;
    }

    try {
      const fileRef = ref(storage, `file/${selectedFile.name}`);
      await uploadBytes(fileRef, selectedFile);
      const downloadURL = await getDownloadURL(fileRef);

      await setDoc(doc(db, "files", Date.now().toString()), {
        name: selectedFile.name,
        type: selectedFile.type,
        size: selectedFile.size,
        modifiedAt: selectedFile.lastModified,
        parentFolderId,
        projectId,
        imageUrl: downloadURL,
        createdAt: new Date().toISOString(),
      });

      onFileUploaded();
      onClose();
      if (setShowToastMsg) {
        setShowToastMsg("File Uploaded Successfully!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Erreur lors de l'upload du fichier.");
      setShowToast(true);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Upload File</ModalHeader>
          <ModalBody>
            <Input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleFileUpload}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showToast && <Toast msg={error || "Une erreur est survenue"} />}
    </>
  );
}

export default UploadFileModal;
