import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { app } from "@/firebase/firebaseConfig";
import { ShowToastContext } from "@/context/ShowToastContext";
import { Modal, Button, Tooltip } from "@nextui-org/react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FaDownload, FaTrash, FaEye } from 'react-icons/fa';

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const iconMap: { [key: string]: string } = {
      'pdf': '/images/pdf.png',
      'png': '/images/png.png',
      'jpg': '/images/jpg.png',
      'jpeg': '/images/jpg.png',
      'pptx': '/images/pptx.png',
      'docx': '/images/docx.png',
    };
    return iconMap[extension || ''] || '/images/file-icon.png';
  };

  const deleteFile = async () => {
    try {
      await deleteDoc(doc(db, "files", file.id.toString()));
      setShowToastMsg("File Deleted!");
      onFileDeleted();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting file: ", error);
      setShowToastMsg("Error deleting file");
    }
  };

  const handleDownload = async () => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, file.imageUrl);
      const url = await getDownloadURL(fileRef);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier:", error);
      setShowToastMsg(`Erreur lors du téléchargement du fichier: ${error}`);
    }
  };

  const handlePreview = () => {
    setIsPreviewModalOpen(true);
  };

  const renderPreview = () => {
    if (file.type.startsWith('image/')) {
      return <img src={file.imageUrl} alt={file.name} style={{ maxWidth: '100%', maxHeight: '70vh' }} />;
    } else if (file.type === 'application/pdf') {
      return <iframe src={`${file.imageUrl}#view=FitH`} style={{ width: '100%', height: '70vh' }} />;
    } else {
      return <p>Aperçu non disponible pour ce type de fichier.</p>;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-md">
        <div className="flex gap-2 items-center flex-grow">
          <Image src={getFileIcon(file.name)} alt="file-icon" width={26} height={20} />
          <h2 className="text-[15px] truncate">{file.name}</h2>
        </div>
        <div className="text-center hidden md:block">
          <h2 className="text-[15px]">
            {moment(file.modifiedAt).format("MMMM DD, YYYY")}
          </h2>
        </div>
        <div className="text-center hidden md:block">
          <h2 className="text-[15px]">
            {(file.size / 1024 ** 2).toFixed(2) + " MB"}
          </h2>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Aperçu">
            <FaEye className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handlePreview} size={18} />
          </Tooltip>
          <Tooltip content="Télécharger">
            <FaDownload className="cursor-pointer text-green-500 hover:text-green-700" onClick={handleDownload} size={18} />
          </Tooltip>
          <Tooltip content="Supprimer">
            <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" onClick={() => setIsDeleteModalOpen(true)} size={18} />
          </Tooltip>
        </div>
      </div>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <Modal.Header>
          <h3>Confirmer la suppression</h3>
        </Modal.Header>
        <Modal.Body>
          <p>Êtes-vous sûr de vouloir supprimer le fichier "{file.name}" ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onPress={deleteFile}>
            Supprimer
          </Button>
          <Button onPress={() => setIsDeleteModalOpen(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal isOpen={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)} size="xl">
        <Modal.Header>
          <h3>Aperçu de {file.name}</h3>
        </Modal.Header>
        <Modal.Body>
          {renderPreview()}
        </Modal.Body>
        <Modal.Footer>
          <Button onPress={() => setIsPreviewModalOpen(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FileItem;
