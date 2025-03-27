"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Areas() {
  const { handleSubmit, register, reset } = useForm();

  const [areas, setAreas] = useState([]);

  const [headquarters, setHeadquarters] = useState([]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/areas", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setAreas([...areas, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nueva area.");
    }
  };

  const deleteArea = (id) => {
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
      .get("/areas")
      .then((response) => {
        setAreas(response.data);
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
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Areas
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg p-6 space-y-4 max-w-full w-full mx-auto mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Selector de Sede */}
          <div className="md:col-span-2">
            <label
              htmlFor="headquarter"
              className="block text-sm font-medium text-red-500 mb-1"
            >
              Sede *
            </label>
            <select
              id="headquarter"
              className="w-full p-2.5  border border-zinc-600 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("headquarter", { required: true })}
            >
              <option value="">Seleccione Sede</option>
              {headquarters.map((headquarter) => (
                <option key={headquarter._id} value={headquarter._id}>
                  {headquarter.businnes.name} - {headquarter.name}
                </option>
              ))}
            </select>
          </div>

          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-red-500 mb-1"
            >
              Nombre *
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2.5 border border-zinc-600 rounded-md placeholder-zinc-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Ej: Marketing"
              {...register("name", { required: true })}
            />
          </div>

          {/* Botón de Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800"
            >
              Registrar Área
            </button>
          </div>
        </div>

        {/* Campo Descripción (full width) */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-red-500 mb-1"
          >
            Descripción
          </label>
          <input
            id="description"
            type="text"
            className="w-full p-2.5 border border-zinc-600 rounded-md  placeholder-zinc-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Descripción del área"
            {...register("description")}
          />
        </div>
      </form>
      <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-red-500">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Sede
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
          {areas.map((area) => (
            <tr
              key={area._id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {area.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">
                  {area.headquarter?.businnes?.name} - {area.headquarter?.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    area.status
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800" /* Usamos tonalidades rojas */
                  }`}
                >
                  {area.status ? "Activa" : "Inactiva"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button
                  className="text-white bg-red-500 hover:bg-red-800 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                  onClick={() => deleteArea(area._id)}
                >
                  Eliminar
                </button>
                <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
