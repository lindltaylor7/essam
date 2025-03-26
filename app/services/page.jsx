"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Areas() {
  const { handleSubmit, register, reset } = useForm();

  const [services, setServices] = useState([]);

  const [headquarters, setHeadquarters] = useState([]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/services", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setServices([...services, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nuevo servicio.");
    }
  };

  const deleteService = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/areas/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setAreas(areas.filter((area) => area._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar area.");
      }
    };
  };

  useEffect(() => {
    axiosInstance
      .get("/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las areas:", error);
      });

    axiosInstance
      .get("/headquarters")
      .then((response) => {
        setHeadquarters(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las sedes:", error);
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Servicios
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded p-5 bg-zinc-800 flex flex-col w-full"
        >
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="Nombre"
            {...register("name")}
          />
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="Descripcion"
            {...register("description")}
          />
          <input
            type="submit"
            className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md"
            value="Registrar Servicios"
          />
        </form>
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {service.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={deleteService(service._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
