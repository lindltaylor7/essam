'use client'

import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axiosInstance from "../utils/axiosInstance";
import LoadingScreen from "../components/LoadingScreen";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [permissionsUrl, setPermissionsUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    const getUserData = async (id) => {
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            if (response.status === 200) {
                setUser(response.data);
                setIsAuthenticated(true);
                /* 
                const newPermissions = [...response.data.permissions, ...response.data.role[0].permissions];
                setPermissionsUrl(newPermissions);
                */
            }
        } catch (error) {
            console.error('Error al obtener datos del usuario:', error);
            throw error; // Propagar el error para manejarlo en el catch
        }
    };

    const handleLogout = () => {
        setUser({});
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        router.push('/');
    };

    // Efecto para verificar autenticación al montar el componente
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            try {
                if (!token) throw new Error("No hay token");
                
                const decoded = jwt.decode(token);
                if (!decoded) throw new Error("Token inválido");
                
                await getUserData(decoded.id); // Esperar a getUserData

                // Redirigir a Home si está en la raíz y autenticado
                if (pathname === '/') {
                    router.push('/');
                }
            } catch (error) {
                handleLogout();
            } finally {
                setIsLoading(false); // Finalizar carga
            }
        };

        checkAuth();
    }, []); // Solo se ejecuta al montar

    // Efecto para manejar redirecciones post-autenticación
    useEffect(() => {
        if (isLoading) return; // Esperar a que termine la carga

        if (isAuthenticated) {
            // Verificar permisos si no está en la raíz
            if (pathname !== '/') {
                const hasPermission = user.permissions?.some(
                    (p) => `/${p.url}` === pathname
                );
                if (!hasPermission) {
                    router.push('/'); // Redirigir si no tiene permiso
                }
            }
        } else if (pathname !== '/') {
            router.push('/'); // Redirigir no autenticados a login
        }
    }, [isAuthenticated, isLoading, pathname]);

    // Mostrar carga mientras se verifica
    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated,
            getUserData, 
            handleLogout 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAppAuth() {
    return useContext(AuthContext);
}