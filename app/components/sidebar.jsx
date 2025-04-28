import { useAppAuth } from "../context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

export default function Sidebar({ sidebarStatus }) {
  const pathname = usePathname();

  const { user, setUser, isAuthenticated, setIsAuthenticated, handleLogout } =
    useAppAuth();
  return (
    <div
      className={`flex flex-col bg-white h-screen fixed left-0 top-0 px-1 border-r border-gray-200
    transition-all duration-300 ease-in-out shadow-lg overflow-hidden
    ${sidebarStatus ? "w-64 opacity-100" : "w-0 opacity-0"}`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="px-4 py-6 hover:bg-gray-50 transition-colors duration-200 shrink-0"
      >
        <p className="text-2xl font-bold text-center text-red-600">Essam</p>
      </Link>

      {/* Menú con scroll */}
      <div className="flex-1 overflow-y-auto py-2">
        <div className="space-y-1 px-2">
          {/* Inicio */}
          <Link href="/">
            <div
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
              }`}
              aria-current="page"
            >
              <FaHouse className="mr-3 text-base" />
              Inicio
            </div>
          </Link>

          <Link href="/divisions">
            <div
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200`}
              aria-current="page"
            >
              <FaHouse className="mr-3 text-base" />
              Quebrados
            </div>
          </Link>

          {/* Permisos/Enlaces */}
          {user?.permissions?.map((permission) => (
            <Link
              href={`/${permission.url}`}
              key={permission._id}
              className="block"
            >
              <div
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${permission.url}`
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
                aria-current="page"
              >
                <FaCheck className="mr-3 text-base" />
                {permission.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
