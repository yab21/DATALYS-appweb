"use client";
import React from "react";
import Image from "next/image";

interface FolderItemSmallProps {
  folder: {
    name: string;
    id: string;
  };
  onClick: () => void;
}

function FolderItemSmall({ folder, onClick }: FolderItemSmallProps) {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer rounded-md p-2 hover:bg-gray-2 dark:hover:bg-dark-2"
      onClick={onClick}
    >
      <Image src="/images/folder.png" alt="folder" width={20} height={20} />
      <h1 className="text-dark dark:text-white">{folder.name}</h1>
    </div>
  );
}

export default FolderItemSmall;
