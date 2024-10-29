import React from "react";
import FileItem from "@/components/TableauDeBordClient/ProjetPersonnel/InformationDuProjet/File/FileItem";

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
      <div className="mb-2 grid grid-cols-4 overflow-x-scroll rounded-md bg-dark-3 p-3 text-xs font-normal scrollbar-hide md:text-base">
        <div className="text-dark dark:text-white">Nom du fichier</div>
        <div className="text-dark dark:text-white">Date d'ajout</div>
        <div className="text-dark dark:text-white">Taille</div>
        <div className="text-dark dark:text-white">Action</div>
      </div>

      {/* Liste des fichiers */}
      {files.map((file) => (
        <FileItem key={file.id} file={file} onFileDeleted={onFileDeleted} />
      ))}
    </div>
  );
};

export default FileList;
