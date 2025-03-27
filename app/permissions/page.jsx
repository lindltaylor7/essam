"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Permissions() {
  const { handleSubmit, register, reset } = useForm();

  const [permissions, setPermissions] = useState([]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/permissions", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setPermissions([...permissions, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nuevo permiso.");
    }
  };

  const deletePermissions = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/permissions/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setPermissions(
            permissions.filter((permission) => permission._id !== id)
          );
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar permiso.");
      }
    };
  };

  useEffect(() => {
    axiosInstance
      .get("/permissions")
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los permisos:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Permisos
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Registrar Nuevo Permiso
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ej: Dashboard"
                {...register("name", { required: true })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Descripción breve"
                {...register("description")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  /
                </span>
                <input
                  type="text"
                  className="flex-1 p-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="ruta"
                  {...register("url", { required: true })}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Registrar Permiso
          </button>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Permisos
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar permiso..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-600">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                URL
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {permissions.map((permission) => (
              <tr
                key={permission._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {permission.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {permission.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">/{permission.url}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      permission.status
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {permission.status ? "Activa" : "Inactiva"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => deletePermissions(permission._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
