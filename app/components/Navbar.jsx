"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppAuth } from "../context";
import { useRouter } from "next/navigation";
import axiosInstance from "../utils/axiosInstance";
import Menu from "./menu.jsx";
import { FaBars, FaCheck } from "react-icons/fa6";

export default function Navbar({ switchSidebar }) {
  const router = useRouter();

  const logOut = () => {
    console.log("logOut");
    axiosInstance.get("/logout");
    setIsAuthenticated(false);
    setUser({});
    router.push("/");
  };

  const { user, setUser, isAuthenticated, setIsAuthenticated, handleLogout } =
    useAppAuth();

  const [isVisible, setIsVisible] = useState(false);

  const [navbarStatus, setNavbarStatus] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeSidebar = () => {
    switchSidebar();
  };

  const handleNavbarResponsive = () => {
    setNavbarStatus(!navbarStatus);
  };

  return (
    <nav className="bg-white mt-2 rounded mx-4 shadow-sm border border-gray-200 sm:mx-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleNavbarResponsive}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo y menú principal */}
          <div className="sm:block flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center ">
              <FaBars
                onClick={closeSidebar}
                className="text-zinc-600 hover:text-red-600 cursor-pointer transition-colors duration-200 hidden sm:block"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>

          {/* Menú usuario */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div
              className="relative ml-3"
              style={{ display: isAuthenticated ? "block" : "none" }}
            >
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-gray-200 transition-colors duration-200"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  onBlur={() => setTimeout(() => setIsMenuOpen(false), 100)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <div className="size-8 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors duration-200">
                    <p className="text-white font-medium">
                      {user?.name?.[0] || "?"}
                    </p>
                  </div>
                </button>
              </div>

              {/* Menú desplegable */}
              <div
                className={`absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Mi Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Configuración
                </a>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={handleLogout}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil (desplegable) */}
      <div className={navbarStatus ? "sm:hidden" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            href="/"
            className="block"
            onClick={() => setNavbarStatus(false)}
          >
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
              Home
            </p>
          </Link>
          {user?.permissions?.map((permission) => (
            <Link
              href={`/${permission.url}`}
              key={permission._id}
              className="block"
              onClick={() => setNavbarStatus(false)}
            >
              <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
                {permission.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
