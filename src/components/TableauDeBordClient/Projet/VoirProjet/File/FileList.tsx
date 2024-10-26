import React from "react";
import FileItem from "@/components/TableauDeBordClient/Projet/VoirProjet/File/FileItem";

interface FileListProps {
  files: Array<{
    id: string;
    name: string;
    type: string;
    size: number;
    modifiedAt: number;
    imageUrl: string;
  }>;
  onFileDeleted: () => void;
}

const FileList: React.FC<FileListProps> = ({ files, onFileDeleted }) => {
  return (
    <div>
      {/* En-tête du tableau */}
      <div className="mb-2 grid grid-cols-4 items-center rounded-md bg-gray-100 p-3 font-bold">
        <div className="col-span-2">Nom du fichier</div>
        <div className="text-center">Taille</div>
        <div className="text-center">Date d'ajout</div>
      </div>

      {/* Liste des fichiers */}
      {files.map((file) => (
        <FileItem key={file.id} file={file} onFileDeleted={onFileDeleted} />
      ))}
    </div>
  );
};

export default FileList;
