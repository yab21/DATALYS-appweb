import Image from "next/image";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface FolderItemProps {
  folder: {
    name: string;
    id: string;
  };
  onClick: () => void;
}

function FolderItem({ folder, onClick }: FolderItemProps) {
  return (
    <Card
      isPressable
      onPress={onClick}
      className="relavtive m-2 h-[200px] w-[200px] bg-white dark:bg-dark-2"
    >
      <CardBody className="flex items-center justify-center">
        <Image src="/images/folder.png" alt="folder" width={100} height={100} />
      </CardBody>
      <CardFooter className="justify-center">
        <p className="text-center text-small text-dark dark:text-white">
          {folder.name}
        </p>
      </CardFooter>
      <Dropdown className="relative">
        <DropdownTrigger className="absolute right-0 top-0">
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
    </Card>
  );
}

export default FolderItem;
