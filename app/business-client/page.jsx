"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function BusinnesClient() {
  const { handleSubmit, register, reset } = useForm();

  const [mines, setMines] = useState([]);

  const [businessClients, setBusinessClients] = useState([]);

  const [businnesContracts, setBusinnesContracts] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/businnes-clients", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setBusinessClients([...businessClients, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nueva empresa cliente.");
    }
  };

  const deleteBusinnesClient = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/units/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setAreas(units.filter((unit) => unit._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar unidad.");
      }
    };
  };

  useEffect(() => {
    axiosInstance
      .get("/mines")
      .then((response) => {
        setMines(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las minas:", error);
      });

    axiosInstance
      .get("/businnes-clients")
      .then((response) => {
        setBusinessClients(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las minas:", error);
      });

    axiosInstance
      .get("/businnes-contracts")
      .then((response) => {
        setBusinnesContracts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las minas:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Registro de Empresas Cliente
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
              placeholder="Nombre de la empresa"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              RUC *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Número de RUC"
              {...register("ruc", { required: true })}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Dirección completa"
              {...register("address")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mina *
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("mine", { required: true })}
            >
              <option value="">Seleccione Mina</option>
              {mines.map((mine) => (
                <option key={mine._id} value={mine._id}>
                  {mine.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Empresa Contrato
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("businnesContract")}
            >
              <option value="">Seleccione Empresa Contrato</option>
              {businnesContracts.map((bc) => (
                <option key={bc._id} value={bc._id}>
                  {bc.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Registrar Empresa Cliente
        </button>
      </form>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Empresas Cliente
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar empresa..."
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
                RUC
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Dirección
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Mina
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Empresa Contrato
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {businessClients.map((bc) => (
              <tr
                key={bc._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <p>{bc.name}</p>
                  <small>ID: {bc._id}</small>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {bc.ruc}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {bc.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {bc.mine?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {bc.businnesContract?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2">
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => deleteBusinnesClient(bc._id)}
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
