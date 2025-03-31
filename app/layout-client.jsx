"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import { AuthProvider, useAppAuth } from "./context";
import { useState } from "react";

// Componente interno que usa el contexto
function AuthenticatedLayout({ children }) {
  const pathname = usePathname();
  const { isAuthenticated } = useAppAuth(); // Usamos el hook personalizado
  const isHomePage = pathname === "/";

  // Si aún no se ha verificado la autenticación y no es la página de inicio
  if (isAuthenticated === null && !isHomePage) {
    return <div>Cargando...</div>;
  }

  const [sidebarStatus, setSidebarStatus] = useState(true);

  const switchSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  return (
    <>
      <div className="flex flex-1">
        {(!isHomePage || isAuthenticated) && (
          <div className="fixed inset-y-0 left-0">
            <Sidebar sidebarStatus={sidebarStatus} />
          </div>
        )}
        <main
          className={`flex-1 ${
            !isHomePage || isAuthenticated
              ? sidebarStatus
                ? "ml-[16.6%]"
                : ""
              : ""
          }`}
        >
          {(!isHomePage || isAuthenticated) && (
            <Navbar switchSidebar={switchSidebar} />
          )}
          <div className="min-h-screen p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)] w-full">
            <div className="gap-8 row-start-2 items-center sm:items-start">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Componente principal que envuelve con AuthProvider
export default function LayoutClient({ children }) {
  return (
    <AuthProvider>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthProvider>
  );
}
