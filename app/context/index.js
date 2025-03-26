'use client'

import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken"
import axiosInstance from "../utils/axiosInstance";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const router = useRouter()
    const pathname = usePathname()

    let [user, setUser] = useState({})
    let [isAuthenticated, setIsAuthenticated] = useState(null)
    let [permissionsUrl, setPermissionsUrl] = useState([])

    const getUserData = async (id) => {
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            if (response.status === 200) {
                setUser(response.data);
                setIsAuthenticated(true);
                /* const newPermissions = [...response.data.permissions, ...response.data.role[0].permissions]
                setPermissionsUrl(newPermissions);
                console.log(permissionsUrl); */
            }
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
            setIsAuthenticated(false);
            localStorage.removeItem('token');
            router.push('/');
        }
    }

    const handleLogout = () => {
        setUser({})
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        router.push('/')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            try {
                const decoded = jwt.decode(token);
                if (decoded) {
                    getUserData(decoded.id)

                } else {
                    handleLogout()
                }
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                handleLogout()
            }
        }else{
            handleLogout()
        }
    }, [])
   
    if (isAuthenticated === null) {
        if(pathname != '/'){
            return <p>Cargando...</p>;
        }
        // Previene el renderizado hasta verificar la autenticación
    }else if (isAuthenticated && pathname != '/') {
        const urlPermissionFound = user.permissions.some(permission => '/'+permission.url == pathname)
        if(!urlPermissionFound){
            return <p>Usted no tiene permiso para acceder a esta página {JSON.stringify(permissionsUrl)}</p>;
        }else{
            next
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, setPermissionsUrl, handleLogout }}> 
            {children}
        </AuthContext.Provider>
    )
}

export function useAppAuth(){
    return useContext(AuthContext)
}