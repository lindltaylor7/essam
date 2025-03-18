'use client'

import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken"

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const router = useRouter()
    const pathname = usePathname()

    let [user, setUser] = useState({})
    let [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            try {
                const decoded = jwt.decode(token);
                if (decoded) {
                    setUser(decoded);
                    setIsAuthenticated(true);
                } else {
                    localStorage.removeItem('token'); // Si es inválido, borrarlo
                    setIsAuthenticated(false);
                    router.push('/');
                }
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                router.push('/');
            }
        }else{
            router.push('/');
        }
    }, [])
   
    if (isAuthenticated === null) {
        if(pathname != '/'){
            return <p>Cargando...</p>;
        }
        // Previene el renderizado hasta verificar la autenticación
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}> 
            {children}
        </AuthContext.Provider>
    )
}

export function useAppAuth(){
    return useContext(AuthContext)
}