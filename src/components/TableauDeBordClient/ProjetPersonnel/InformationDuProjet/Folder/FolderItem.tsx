import Image from "next/image";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

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
    </Card>
  );
}

export default FolderItem;
