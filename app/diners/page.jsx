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
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Comensales
      </h1>
      {/* Sección de carga de archivos */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Importar desde Excel
        </h2>
        <form
          onSubmit={handleFile}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <label className="w-full sm:w-auto cursor-pointer">
            <span className="sr-only">Seleccionar archivo</span>
            <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-500 transition-colors duration-200">
              <svg
                className="w-6 h-6 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="text-gray-700">
                {file ? file.name : "Seleccionar archivo (.xlsx, .xls)"}
              </span>
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </label>
          <button
            type="submit"
            disabled={loading || !file}
            className={`w-full sm:w-auto px-6 py-3 rounded-md font-medium text-white transition-colors duration-200 ${
              loading
                ? "bg-gray-400"
                : file
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subiendo...
              </span>
            ) : (
              "Subir archivo"
            )}
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-3 rounded-md ${
              message.includes("éxito")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      {/* Formulario de registro manual */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Registro manual
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del comensal *
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nombre completo"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                DNI *
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Número de DNI"
                {...register("dni", { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unidad minera *
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Empresa Cliente
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("businnesClient")}
              >
                <option value="">Seleccione Empresa Cliente</option>
                {businessClients.map((bc) => (
                  <option key={bc._id} value={bc._id}>
                    {bc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Registrar Comensal
          </button>
        </form>
      </div>

      {/* Tabla de comensales */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Comensales
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar comensal..."
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
                DNI
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Unidad
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diners.map((diner) => (
              <tr
                key={diner._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {diner.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{diner.dni}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {diner.unit?.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => deleteDiners(diner._id)}
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
