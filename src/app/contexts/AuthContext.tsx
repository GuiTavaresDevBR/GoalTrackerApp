import { createContext, useState } from "react";
import { UserType } from "../types/UserType";

type AuthContextType = {
  userLists: UserType[];
  setUserLists: React.Dispatch<React.SetStateAction<UserType[]>>;
  loggedUser: UserType | null;
  setLoggedUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  handleExecuteLogin: (email: string, password: string) => UserType | undefined;
  handleExecuteLogout: () => void;
  handleCreateUser: (name: string, email: string, password: string) => void;
  handleVerifyIfUserExists: (email: string) => UserType | undefined;
  handleRemoveUser: (id: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userLists, setUserLists] = useState<UserType[]>([]);
  const [loggedUser, setLoggedUser] = useState<UserType | null>(null);

  function handleExecuteLogin(email: string, password: string) {
    const findUserByEmailAndPassword = userLists.find(
      (user) => user.email === email && user.password === password,
    );
    if (findUserByEmailAndPassword) {
      setLoggedUser(findUserByEmailAndPassword);
      localStorage.setItem("user", findUserByEmailAndPassword.id);
    }
    return findUserByEmailAndPassword;
  }

  function handleExecuteLogout() {
    localStorage.removeItem("user");
    setLoggedUser(null);
  }

  function handleVerifyIfUserExists(email: string) {
    const findUserByEmail = userLists.find((user) => user.email === email);
    return findUserByEmail;
  }

  function handleCreateUser(name: string, email: string, password: string) {
    const newUser: UserType = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      createdAt: new Date(),
    };
    setUserLists((prev) => [...prev, newUser]);
  }

  function handleRemoveUser(id: string) {
    setUserLists((prev) => prev.filter((user) => user.id !== id));
    handleExecuteLogout();
  }

  return (
    <AuthContext.Provider
      value={{
        userLists,
        setUserLists,
        handleExecuteLogin,
        handleExecuteLogout,
        handleCreateUser,
        handleVerifyIfUserExists,
        loggedUser,
        setLoggedUser,
        handleRemoveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
