"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Users() {
  const { handleSubmit, register, reset } = useForm();

  const [businnes, setBusinnes] = useState([]);

  const [users, setUsers] = useState([]);

  const [entities, setEntities] = useState([]);

  const [rolesEntity, setRolesEntity] = useState([]);

  const [entitySelected, setEntitySelected] = useState(0);

  const [entityIdSelected, setEntityIdSelected] = useState(0);

  const [areas, setAreas] = useState([]);

  const [roles, setRoles] = useState([]);

  const [cafes, setCafes] = useState([]);

  const onSubmit = async (data) => {
    data.entityType = entitySelected;
    data.entityId = entityIdSelected;
    console.log(data);
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/users", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        setUsers([...users, response.data]);
        console.log(response);
        reset();
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al enviar los datos:", error);
      alert("Error al registrar nuevo usuario.");
    }
  };

  const deleteUser = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/users/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setUsers(users.filter((user) => user._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar usuario.");
      }
    };
  };

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });

    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las roles:", error);
      });

    axiosInstance
      .get("/areas")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los areas:", error);
      });

    axiosInstance
      .get("/cafes")
      .then((result) => {
        setCafes(result.data);
      })
      .catch((err) => {
        console.error("Error al obtener las cafes:", err);
      });
  }, []);

  const selectEntity = (e) => {
    setEntitySelected(e.target.value);
    if (e.target.value == 1) {
      setEntities(areas);
    } else if (e.target.value == 2) {
      setEntities(cafes);
    }
  };

  const selectRolesEntity = (e) => {
    setEntityIdSelected(e.target.value);
    const { roles } = entities.find((entity) => entity._id == e.target.value);
    setRolesEntity(roles);
    console.log(roles);
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Usuarios
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Tipo de Entidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de entidad *
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              onChange={selectEntity}
            >
              <option value="">Seleccione tipo de entidad</option>
              <option value={1}>Áreas</option>
              <option value={2}>Cafeterías</option>
            </select>
          </div>

          {/* Entidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Entidad *
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              onChange={selectRolesEntity}
            >
              <option value="">Seleccione entidad</option>
              {entities.map((entity) => (
                <option key={entity._id} value={entity._id}>
                  {entity.headquarter
                    ? entity.headquarter.businnes.name
                    : entity.unit.mine.name}{" "}
                  -{" "}
                  {entity.headquarter
                    ? entity.headquarter.name
                    : entity.unit.name}{" "}
                  - {entity.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Nombre completo"
              {...register("name", { required: true })}
            />
          </div>

          {/* DNI */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Cuenta bancaria */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cuenta bancaria
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Número de cuenta"
              {...register("payrollAccount")}
            />
          </div>

          {/* Grado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Grado
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Grado académico"
              {...register("degree")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Rol */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rol *
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("role", { required: true })}
            >
              <option value="">Seleccione Rol</option>
              {rolesEntity.map((r) => (
                <option key={r._id} value={r._id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Correo electrónico"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña *
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
        </div>

        {/* Botón de submit */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Registrar Usuario
        </button>
      </form>

      {/* Tabla de usuarios */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
                Correo
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Entidad
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Cargo
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{user.dni}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {user.credentials.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.entityType == 1
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.entityType == 1 ? "Área" : "Cafetería"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {user.role[0].name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Editar
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={() => deleteUser(user._id)}
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
