"use client";
import { createContext, useState } from "react";
import { UserType } from "../types/UserType";

type AuthContextType = {
  userLists: UserType[];
  setUserLists: React.Dispatch<React.SetStateAction<UserType[]>>;
  loggedUser: UserType | null;
  setLoggedUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  executeLogin: (email: string, password: string) => UserType | undefined;
  executeLogout: () => void;
  createUser: (name: string, email: string, password: string) => void;
  verifyIfUserExists: (email: string) => UserType | undefined;
  deleteUser: (id: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userLists, setUserLists] = useState<UserType[]>([]);
  const [loggedUser, setLoggedUser] = useState<UserType | null>(null);

  function executeLogin(email: string, password: string) {
    const findUserByEmailAndPassword = userLists.find(
      (user) => user.email === email && user.password === password,
    );
    if (findUserByEmailAndPassword) {
      setLoggedUser(findUserByEmailAndPassword);
      localStorage.setItem("user", findUserByEmailAndPassword.id);
    }
    return findUserByEmailAndPassword;
  }

  function executeLogout() {
    localStorage.removeItem("user");
    setLoggedUser(null);
  }

  function verifyIfUserExists(email: string) {
    const findUserByEmail = userLists.find((user) => user.email === email);
    return findUserByEmail;
  }

  function createUser(name: string, email: string, password: string) {
    const newUser: UserType = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      createdAt: new Date(),
    };
    setUserLists((prev) => [...prev, newUser]);
  }

  function deleteUser(id: string) {
    setUserLists((prev) => prev.filter((user) => user.id !== id));
    executeLogout();
  }

  return (
    <AuthContext.Provider
      value={{
        userLists,
        setUserLists,
        executeLogin,
        executeLogout,
        createUser,
        verifyIfUserExists,
        loggedUser,
        setLoggedUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
