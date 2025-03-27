"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import ServicesModal from "../components/ServicesModal";

export default function Roles() {
  const { handleSubmit, register, reset } = useForm();

  const [showModal, setShowModal] = useState(false);

  const [selectedCafe, setSelectedCafe] = useState({});

  const [cafes, setCafes] = useState([]);

  const [services, setServices] = useState([]);

  const [units, setUnits] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/cafes", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setCafes([...cafes, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nueva unidad.");
    }
  };

  const deleteCafes = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/cafes/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setCafes(units.filter((unit) => unit._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar cafe.");
      }
    };
  };

  const openServiceModal = (cafe) => {
    setSelectedCafe(cafe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axiosInstance
      .get("/cafes")
      .then((response) => {
        setCafes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los cafes:", error);
      });

    axiosInstance
      .get("/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los servicios:", error);
      });

    axiosInstance
      .get("/units")
      .then((response) => {
        setUnits(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las unidades:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Registro de Cafeterías
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Nombre de la cafetería"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unidad Minera *
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("unit", { required: true })}
            >
              <option value="">Seleccione Unidad minera</option>
              {units.map((unit) => (
                <option key={unit._id} value={unit._id}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Registrar Cafetería
        </button>
      </form>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Cafeterías
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cafetería..."
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
                Unidad Minera
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cafes.map((cafe) => (
              <tr
                key={cafe._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {cafe.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {cafe.unit?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2">
                  <button
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => openServiceModal(cafe)}
                  >
                    Servicios
                  </button>
                  <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => deleteCafes(cafe._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ServicesModal
        active={showModal}
        onClose={closeModal}
        cafe={selectedCafe}
        services={services}
      />
    </>
  );
}
