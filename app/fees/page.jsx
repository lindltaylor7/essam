"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

export default function Fees() {
  const { handleSubmit, register, reset } = useForm();

  const [areas, setAreas] = useState([]);

  const [headquarters, setHeadquarters] = useState([]);

  const [services, setServices] = useState([]);

  const [cafes, setCafes] = useState([]);

  const [cafeId, setCafeId] = useState(0);

  // Estado para manejar la edición de tarifas
  const [editing, setEditing] = useState({});

  const [tempValue, setTempValue] = useState("");

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

  const manageSelectedCafe = (event) => {
    const cafeSelectedId = event.target.value;
    const cafeSelected = cafes.find((cafe) => cafe._id === cafeSelectedId);
    setCafeId(event.target.value);
    setServices(cafeSelected.services);
  };

  // Función para manejar el doble clic
  const handleDoubleClick = (serviceId, field, currentValue) => {
    setEditing({ serviceId, field });
    setTempValue(currentValue);
  };

  // Función para manejar el cambio de valor
  const handleChange = (e) => {
    setTempValue(e.target.value);
  };

  // Función para guardar el valor editado
  const saveValue = (serviceId, field) => {
    setServices((prevServices) =>
      prevServices.map((service) => {
        if (service._id === serviceId) {
          // Asegúrate de que `service.prices` sea un objeto
          if (!service.prices) {
            service.prices = {};
          }
          // Asigna el valor a la propiedad [field] dentro de `service.prices`
          service.prices[field] = parseFloat(tempValue) || 0;
        }
        return service; // Devuelve el servicio modificado o sin modificar
      })
    );
    setEditing({}); // Desactiva el modo de edición
  };

  const saveFees = async (service) => {
    console.log(service);

    const data = {
      cafeId,
      service: service,
    };

    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axiosInstance.post("/prices-services-cafe", data);

      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 200) {
        console.log(response);
        alert("Precio actualizado correctamente.");
        //setAreas(areas.filter((area) => area._id !== id));
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error("Error al actualizar precios:", error);
      alert("Error al actualizar precios.");
    }
  };

  // Función para manejar la tecla "Enter"
  const handleKeyDown = (e, serviceId, field) => {
    if (e.key === "Enter") {
      saveValue(serviceId, field);
    }
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
      .get("/cafes")
      .then((response) => {
        setCafes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las cafes:", error);
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
          Registro de Tarifas
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded p-5 bg-zinc-800 flex flex-col w-full"
        >
          <select
            className="p-2 my-2 bg-zinc-500 rounded text-white"
            onChange={manageSelectedCafe}
          >
            <option value={null}>Seleccione Cafetería</option>
            {cafes.map((cafe) => (
              <option key={cafe._id} value={cafe._id}>
                {cafe.unit.name} - {cafe.name}
              </option>
            ))}
          </select>
        </form>
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Con IGV
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sin IGV
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
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  onDoubleClick={() =>
                    handleDoubleClick(
                      service._id,
                      "withTax",
                      service.withTax || 0
                    )
                  }
                >
                  {editing.serviceId === service._id &&
                  editing.field === "withTax" ? (
                    <input
                      type="number"
                      value={tempValue}
                      onChange={handleChange}
                      onBlur={() => saveValue(service._id, "withTax")}
                      onKeyDown={(e) =>
                        handleKeyDown(e, service._id, "withTax")
                      }
                      autoFocus
                      className="w-20 p-1 border rounded"
                    />
                  ) : (
                    <p>S./ {service.prices?.withTax || 0}</p>
                  )}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  onDoubleClick={() =>
                    handleDoubleClick(
                      service._id,
                      "withoutTax",
                      service.withoutTax || 0
                    )
                  }
                >
                  {editing.serviceId === service._id &&
                  editing.field === "withoutTax" ? (
                    <input
                      type="number"
                      value={tempValue}
                      onChange={handleChange}
                      onBlur={() => saveValue(service._id, "withoutTax")}
                      onKeyDown={(e) =>
                        handleKeyDown(e, service._id, "withoutTax")
                      }
                      autoFocus
                      className="w-20 p-1 border rounded"
                    />
                  ) : (
                    <p>S./ {service.prices?.withoutTax || 0}</p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => saveFees(service)}
                  >
                    Actualizar
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
