import { createContext, useState } from "react";
import { UserType } from "../types/UserType";

type AuthContextType = {
  userLists: UserType[];
  setUserLists: React.Dispatch<React.SetStateAction<UserType[]>>;
  handleVerifyLogin: (email: string, password: string) => UserType | undefined;
  handleCreateUser: (name: string, email: string, password: string) => void;
  handleVerifyIfUserExists: (email: string) => UserType | undefined;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userLists, setUserLists] = useState<UserType[]>([]);

  function handleVerifyLogin(email: string, password: string) {
    const findUserByEmailAndPassword = userLists.find(
      (user) => user.email === email && user.password === password,
    );
    return findUserByEmailAndPassword;
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

  return (
    <AuthContext.Provider
      value={{
        userLists,
        setUserLists,
        handleVerifyLogin,
        handleCreateUser,
        handleVerifyIfUserExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
