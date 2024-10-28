"use client";
import React from "react";
import Image from "next/image";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";

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
      className="flex cursor-pointer justify-between rounded-md p-2 hover:bg-gray-2 dark:hover:bg-dark-2"
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <Image src="/images/folder.png" alt="folder" width={20} height={20} />
        <h1 className="text-dark dark:text-white">{folder.name}</h1>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            size="sm"
            radius="full"
            className="-p-3 flex items-center bg-white dark:bg-dark-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
              />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Link Actions"
          className="bg-white text-dark dark:bg-dark-2 dark:text-white"
        >
          <DropdownItem key="renommer" href="javascript:;">
            Renommer
          </DropdownItem>
          <DropdownItem key="deplacer" href="javascript:;">
            Déplacer
          </DropdownItem>
          <DropdownItem key="supprimer" href="javascript:;">
            Supprimer
          </DropdownItem>
          <DropdownItem key="prive" href="javascript:;">
            Rendre privé
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default FolderItemSmall;
