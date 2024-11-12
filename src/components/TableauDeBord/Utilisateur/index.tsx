"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/TableauDeBord/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  function: string;
  company: string;
  department: string;
  profileImage?: string;
}

const Utilisateur = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Breadcrumb pageName="La liste des utilisateurs" />
      <div className="mt-5 w-full max-w-full rounded-[10px]">
        <div className="mt-8 rounded-[10px]">
          <div className="w-full max-w-full p-2">
            <div className="flex w-full items-center justify-start">
              <h3 className="pt-2 text-[22px] font-medium text-dark dark:text-white">
                La liste des utilisateurs
              </h3>
            </div>
          </div>
          <div className="mt-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 px-2 py-6 md:grid-cols-4 md:py-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-1 dark:bg-gray-dark dark:shadow-card"
                >
                  <div className="flex flex-col items-center pb-6">
                    <Image
                      className="mb-3 rounded-full shadow-lg"
                      src={user.profileImage || "/images/user.png"}
                      alt="user"
                      width={100}
                      height={100}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {user.lastName} {user.firstName}
                    </h5>
                    {user.function && user.company && (
                      <span className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        {user.function} de {user.company}
                      </span>
                    )}
                    {user.department && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user.department}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilisateur;
