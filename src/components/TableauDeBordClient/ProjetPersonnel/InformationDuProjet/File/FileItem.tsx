"use client";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { app } from "@/firebase/firebaseConfig";
import { ShowToastContext } from "@/context/ShowToastContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface FileItemProps {
  file: {
    id: string;
    name: string;
    type: string;
    size: number;
    modifiedAt: number;
    imageUrl: string;
  };
  onFileDeleted: () => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, onFileDeleted }) => {
  const db = getFirestore(app);
  const context = useContext(ShowToastContext);
  const setShowToastMsg = context ? context.setShowToastMsg : () => {};
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteFile = async () => {
    try {
      await deleteDoc(doc(db, "files", file.id.toString()));
      setShowToastMsg("File Deleted!!!");
      onFileDeleted();
      onClose();
    } catch (error) {
      console.error("Error deleting file: ", error);
      setShowToastMsg("Error deleting file");
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    const iconMap: { [key: string]: string } = {
      pdf: "/images/pdf.png",
      png: "/images/png.png",
      jpg: "/images/jpg.png",
      jpeg: "/images/jpg.png",
      pptx: "/images/pptx.png",
      docx: "/images/docx.png",
      // Ajoutez d'autres extensions selon vos besoins
    };
    return iconMap[extension || ""] || "/images/file-icon.png";
  };

  return (
    <>
      <div className="cursor-pointer rounded-md p-3 hover:bg-dark-3">
        <div className="max-w-screen grid w-full grid-cols-4 overflow-x-scroll text-xs scrollbar-hide md:text-base">
          <div
            className="flex items-center gap-2"
            onClick={() => window.open(file.imageUrl)}
          >
            <Image
              src={getFileIcon(file.name)}
              alt="file-icon"
              width={26}
              height={20}
            />
            <h2 className="truncate">{file.name}</h2>
          </div>
          <h2>{moment(file.modifiedAt).format("MMMM DD, YYYY")}</h2>
          <h2>{(file.size / 1024 ** 2).toFixed(2) + " MB"}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={onOpen}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hover:text-scale-100 h-5 w-5 cursor-pointer text-red-500 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white shadow-1 dark:bg-gray-dark dark:shadow-card"
      >
        <ModalContent>
          <ModalHeader className="text-dark dark:text-white">
            Confirmer la suppression
          </ModalHeader>
          <ModalBody>
            <p>Êtes-vous sûr de vouloir supprimer le fichier "{file.name}" ?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={deleteFile}>
              Supprimer
            </Button>
            <Button onPress={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FileItem;
