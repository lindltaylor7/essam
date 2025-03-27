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
      className={`flex flex-col bg-white min-h-screen relative px-1 border-r border-gray-200
    transition-all duration-300 ease-in-out overflow-hidden shadow-lg
    ${sidebarStatus ? "w-64 opacity-100" : "w-0 opacity-0"}`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="px-4 py-6 hover:bg-gray-50 transition-colors duration-200"
      >
        <p className="text-2xl font-bold text-center text-red-600">Essam</p>
      </Link>

      {/* Menú */}
      <div className="space-y-1 px-2 mt-2">
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
  );
}
