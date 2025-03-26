"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Diners() {
  const { handleSubmit, register, reset } = useForm();

  const [cafes, setCafes] = useState([]);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [businessClients, setBusinessClients] = useState([]);

  const [diners, setDiners] = useState([]);

  const [units, setUnits] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/diners", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setDiners([...diners, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nuevo comensal.");
    }
  };

  const deleteDiners = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/diners/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setDiners(diners.filter((diner) => diner._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar comensal.");
      }
    };
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  const handleFile = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Por favor, selecciona un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        const result = await response.data;
        console.log(result);
        setMessage(result.message || "Archivo subido correctamente.");
        getDiners();
      } else {
        throw new Error("Error al subir el archivo.");
      }
    } catch (error) {
      setMessage(error.message || "Hubo un error al subir el archivo.");
    } finally {
      setLoading(false);
    }
  };

  const getDiners = () => {
    axiosInstance
      .get("/diners")
      .then((response) => {
        setDiners(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los comensales:", error);
      });
  };

  useEffect(() => {
    axiosInstance
      .get("/businnes-clients")
      .then((response) => {
        setBusinessClients(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los cafes:", error);
      });

    getDiners();

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Comensales
        </h1>
        <form onSubmit={handleFile}>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="bg-zinc-500 rounded p-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 rounded p-2"
          >
            {loading ? "Subiendo..." : "Subir"}
          </button>
        </form>
        {message && <p>{message}</p>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded p-5 bg-zinc-800 flex flex-col w-full"
        >
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="Nombre del comensal"
            {...register("name")}
          />
          <input
            type="text"
            className="p-2 my-2 bg-zinc-500 rounded"
            placeholder="DNI"
            {...register("dni")}
          />
          <select
            className="p-2 my-2 bg-zinc-500 rounded text-white"
            {...register("unit")}
          >
            <option value={null}>Seleccione Unidad minera</option>
            {units.map((unit) => (
              <option key={unit._id} value={unit._id}>
                {unit.name}
              </option>
            ))}
          </select>
          <select
            className="p-2 my-2 bg-zinc-500 rounded text-white"
            {...register("businnesClient")}
          >
            <option value={null}>Seleccione Empresa Cliente</option>
            {businessClients.map((bc) => (
              <option key={bc._id} value={bc._id}>
                {bc.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md"
            value="Registrar Comensal"
          />
        </form>
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DNI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diners.map((diner) => (
              <tr key={diner._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {diner.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {diner.dni}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {diner.unit?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={deleteDiners(diner._id)}
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
