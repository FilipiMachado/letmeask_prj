import { createContext, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export function useAuth() {
    const value = useContext(AuthContext);
}