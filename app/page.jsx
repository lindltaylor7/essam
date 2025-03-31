"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppAuth } from "./context";
import Image from "next/image";

export default function Home() {
  const { user, setUser, getUserData, isAuthenticated } = useAppAuth();

  const router = useRouter();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/login",
        data
      );

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        getUserData(response.data.user._id);
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="md:flex">
          {/* Sección de texto con gradiente */}
          <div className="p-8 md:w-2/3 bg-gradient-to-r from-red-50 to-white">
            <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">
              Bienvenido al sistema
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800">
              Hola {user?.name} <span className="text-red-500">🎉</span>
            </h1>
            <p className="mt-3 text-xl text-gray-600">{user?.role[0]?.name}</p>
            <div className="mt-6">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                Último acceso: {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Sección de imagen */}
          <div className="md:w-1/3 bg-red-50 flex items-center justify-center p-4">
            <img
              className="h-48 object-contain"
              src="https://cdn-icons-png.flaticon.com/512/4775/4775940.png"
              alt="Ilustración de bienvenida"
            />
          </div>
        </div>

        {/* Indicadores rápidos (opcional) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 border-t border-gray-100">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Usuarios activos</p>
              <p className="font-bold text-lg">24</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Registros hoy</p>
              <p className="font-bold text-lg">12</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tareas completadas</p>
              <p className="font-bold text-lg">18/24</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sección del formulario */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-red-600 mb-2">Essam</h1>
            <p className="text-gray-600">Sistema de gestión de comedores</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="tu@email.com"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Recordar sesión
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                Ingresar al sistema
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p>
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Contacta al administrador
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Sección de la imagen */}
      <div className="hidden md:block md:w-3/5 relative">
        <div className="absolute inset-0 bg-red-900/20"></div>
        <Image
          src="/kitchen.jpg"
          alt="Cocina industrial"
          layout="fill"
          objectFit="cover"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-2xl font-bold mb-2">
            Optimiza la gestión de tu comedor
          </h2>
          <p className="opacity-90">
            Control de inventarios, menús y comensales en un solo lugar
          </p>
        </div>
      </div>
    </div>
  );
}
