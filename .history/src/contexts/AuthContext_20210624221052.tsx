

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }
  

import { createContext } from "react";

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider() {
return (

);
}