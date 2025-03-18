"use client";
import { useAppAuth } from "../context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrganizationsPage() {
    const { isAuthenticated, user } = useAppAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated]);
    

    return (
        <div>
            {user.name}
            <h1>Página protegida - Organizaciones Welcome</h1>
        </div>
    );
}
