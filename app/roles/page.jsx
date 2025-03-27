"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import PermissionsModal from "../components/PermissionsModal";

export default function Roles() {
  const { handleSubmit, register, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectableSides, setSelectableSides] = useState([]);
  const [areas, setAreas] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const onSubmit = async (data) => {
    data.entityType = selectedValue;
    try {
      const response = await axiosInstance.post("/roles", data);
      if (response.status === 201) {
        setRoles([...roles, response.data]);
        reset();
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nuevo rol.");
    }
  };

  const deleteRole = (id) => {
    return async () => {
      try {
        const response = await axiosInstance.delete(`/roles/${id}`);
        if (response.status === 204) {
          setRoles(roles.filter((role) => role._id !== id));
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar rol.");
      }
    };
  };

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error("Error al obtener los roles:", error));

    axiosInstance
      .get("/permissions")
      .then((response) => setPermissions(response.data))
      .catch((error) => console.error("Error al obtener los permisos:", error));

    axiosInstance
      .get("/cafes")
      .then((response) => setCafes(response.data))
      .catch((error) => console.error("Error al obtener los cafes:", error));

    axiosInstance
      .get("/areas")
      .then((result) => setAreas(result.data))
      .catch((error) => console.error("Error al obtener las areas:", error));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setSelectableSides(event.target.value == 1 ? areas : cafes);
  };

  const handleModalPermissions = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Roles
      </h1>

      {/* Formulario de Registro */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Registrar Nuevo Rol
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lugar de trabajo *
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value={0}>Seleccione lugar de trabajo</option>
                <option value={1}>Área</option>
                <option value={2}>Cafetería</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entidad *
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("entityId", { required: true })}
              >
                <option value="">Seleccione Entidad</option>
                {selectableSides.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Rol *
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ej: Administrador"
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
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Registrar Rol
          </button>
        </form>
      </div>

      {/* Tabla de Roles */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Lista de Roles
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar rol..."
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
                Entidad
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
            {roles.map((role) => (
              <tr
                key={role._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {role.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {role.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      role.entityType == 1
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {role.entityType == 1 ? "Área" : "Cafetería"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      role.status
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {role.status ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => handleModalPermissions(role)}
                  >
                    Permisos
                  </button>
                  <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={deleteRole(role._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PermissionsModal
        active={showModal}
        onClose={closeModal}
        role={selectedRole}
        permissions={permissions}
      />
    </div>
  );
}
