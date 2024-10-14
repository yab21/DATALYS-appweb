"use client"
import Image from 'next/image';
import React from 'react';

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
      className='flex gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer'
      onClick={onClick}
    >
      <Image
        src='/images/folder.png'
        alt='folder'
        width={20}
        height={20}
      />
      <h1>{folder.name}</h1>
    </div>
  );
}

export default FolderItemSmall;
