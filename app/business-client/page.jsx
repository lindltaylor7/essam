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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Empresas cliente
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded p-5 bg-zinc-800 flex flex-col w-full"
        >
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="Nombre de la empresa cliente"
            {...register("name")}
          />
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="RUC"
            {...register("ruc")}
          />
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="Direccion"
            {...register("address")}
          />
          <select
            className="p-2 my-2 bg-zinc-500 rounded text-white"
            {...register("mine")}
          >
            <option value={null}>Seleccione Mina</option>
            {mines.map((mine) => (
              <option key={mine._id} value={mine._id}>
                {mine.name}
              </option>
            ))}
          </select>
          <select
            className="p-2 my-2 bg-zinc-500 rounded text-white"
            {...register("businnesContract")}
          >
            <option value={null}>Seleccione Empresa Contrato</option>
            {businnesContracts.map((bc) => (
              <option key={bc._id} value={bc._id}>
                {bc.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md"
            value="Registrar Empresa Cliente"
          />
        </form>
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                RUC
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Direccion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mina
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empresa Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {businessClients.map((bc) => (
              <tr key={bc._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bc.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bc.ruc}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bc.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bc.mine?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bc.businnesContract?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={deleteBusinnesClient(bc._id)}
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
