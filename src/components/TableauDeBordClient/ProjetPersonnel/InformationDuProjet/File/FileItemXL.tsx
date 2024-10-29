import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button } from "@nextui-org/react";

interface FileItemXLProps {
  file: {
    name: string;
    id: string;
    type: string;
    imageUrl: string;
  };
}

const FileItemXL: React.FC<FileItemXLProps> = ({ file }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    return iconMap[extension || ""] || "/images/file-icon.png"; // Icône par défaut si l'extension n'est pas reconnue
  };

  const handleFileClick = () => {
    setIsModalOpen(true);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (file.imageUrl) {
      const link = document.createElement("a");
      link.href = file.imageUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("Impossible de télécharger le fichier");
    }
  };

  return (
    <>
      <div
        className="flex w-1/4 cursor-pointer flex-col items-center justify-center p-4 hover:bg-gray-100"
        onClick={handleFileClick}
      >
        <Image
          src={getFileIcon(file.name)}
          alt={file.name}
          width={64}
          height={64}
        />
        <p className="mt-2 w-full truncate text-center text-sm">{file.name}</p>
        <Button
          auto
          light
          color="primary"
          onClick={handleDownload}
          className="mt-2"
        >
          Télécharger
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width="90%"
      >
        <Modal.Header>
          <h2>{file.name}</h2>
        </Modal.Header>
        <Modal.Body>
          {file.type.startsWith("image/") ? (
            <Image
              src={file.imageUrl}
              alt={file.name}
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
          ) : (
            <iframe
              src={file.imageUrl}
              style={{ width: "100%", height: "80vh" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setIsModalOpen(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FileItemXL;
