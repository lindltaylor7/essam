"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import PermissionsModal from "../components/PermissionsModal";
import { useAppAuth } from "../context";
import { showErrorAlert, showSuccessAlert } from "../libs/swal";
import { utils, writeFile } from "xlsx";

export default function Sales() {
  const { user } = useAppAuth();

  const { handleSubmit, register, reset } = useForm();

  const [roles, setRoles] = useState([]);

  const [sales, setSales] = useState([]);

  const [units, setUnits] = useState([]);

  const [dinerDni, setDinerDni] = useState("");

  const [diner, setDiner] = useState({});

  const [permissions, setPermissions] = useState([]);

  const [selectedRole, setSelectedRole] = useState({});

  const [paymentType, setPaymentType] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [sideJob, setSideJob] = useState(0);

  const [selectedService, setSelectedService] = useState({});

  const [cost, setCost] = useState(0);

  const [areas, setAreas] = useState([]);

  const [cafes, setCafes] = useState([]);

  const [selectedValue, setSelectedValue] = useState(0);

  const onSubmit = async () => {
    try {
      const sale = {
        diner,
        service: selectedService,
        cafe: user.entity,
        price: cost,
        paymentType,
      };

      const response = await axiosInstance.post("/sales", sale);

      if (response.status === 201) {
        showSuccessAlert("Venta registrada correctamente.");
        setSales([...sales, response.data]);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      showErrorAlert(
        "Error al registrar nueva venta. " + error.response.data.message
      );
    }
  };

  const deleteSale = (id) => {
    return async () => {
      try {
        // Enviar los datos del formulario al servidor en el puerto 4000
        const response = await axiosInstance.delete(`/sales/${id}`);

        // Si la respuesta es exitosa, redirigir a /organizations
        if (response.status === 204) {
          console.log(response);
          setAreas(roles.filter((role) => role._id !== id));
        }
      } catch (error) {
        // Manejar errores (por ejemplo, credenciales incorrectas)
        console.error("Error al enviar los datos:", error);
        alert("Error al eliminar rol.");
      }
    };
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setCurrentDateTime(formattedDateTime);

    console.log(user);

    axiosInstance
      .get("/sales")
      .then((response) => {
        setSales(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los ventas:", error);
      });

    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los roles:", error);
      });

    axiosInstance
      .get("/permissions")
      .then((response) => {
        setPermissions(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los permisos:", error);
      });

    axiosInstance
      .get("/cafes")
      .then((response) => {
        setCafes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los cafes:", error);
      });

    axiosInstance
      .get("/units")
      .then((response) => {
        setUnits(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los unidades:", error);
      });

    axiosInstance
      .get("/areas")
      .then((result) => {
        setAreas(result.data);
      })
      .catch((error) => {
        console.error("Error al obtener las areas:", error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value == 1) {
      setSelectableSides(areas);
    } else if (event.target.value == 2) {
      setSelectableSides(cafes);
    }
  };

  const handleModalPermissions = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const searchDiner = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/diners/${dinerDni}`)
      .then((response) => {
        setDiner(response.data);
      })
      .catch((error) => {
        alert("Comensal no encontrado");
        console.error("Error al obtener los datos del comensal:", error);
      });
  };
  const [currentDateTime, setCurrentDateTime] = useState("");

  const handleService = (e) => {
    const serviceId = e.target.value;
    const serviceSelected = diner.unit?.cafes[0].services.find(
      (service) => service._id === serviceId
    );
    setSelectedService(serviceSelected);
    setCost(serviceSelected.prices.withTax);
  };

  const handlePaymentType = (e) => {
    const paymentType = e.target.value;
    setPaymentType(paymentType);
  };

  const exportToExcel = (e) => {
    e.preventDefault();
    const data = [
      ["Cliente", "Fecha", "DNI", "Comensal", "Servicio", "Total"],
      ...sales.map((sale) => [
        sale.bussinesClientName,
        sale.dateTime,
        sale.diner.dinerDni,
        sale.diner.dinerName,
        sale.service.serviceName,
        sale.price,
      ]),
    ];

    const ws = utils.aoa_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Hoja1");
    writeFile(wb, "reporte.xlsx");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Ventas
        </h1>

        <form
          className="rounded p-5 bg-zinc-800 flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 w-full">
            <div className="px-1">
              {currentDateTime}
              <div className="w-full flex flex-row">
                <input
                  type="text"
                  className="p-2 bg-zinc-500 rounded"
                  placeholder="Dni del Comensal"
                  onChange={(e) => setDinerDni(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-4 rounded-md"
                  onClick={searchDiner}
                >
                  Buscar
                </button>
              </div>
              <p>Nombre: {diner.name}</p>
              <p>Unidad: {diner.unit?.name} </p>
              <p>Cafetería: {user.entity?.name} </p>
              <p>Empresa Cliente: {diner.businnesClient?.name}</p>
            </div>
            <div className="flex flex-col">
              <select
                className="p-2 my-2 ms-2 bg-zinc-500 rounded text-white"
                onChange={handleService}
              >
                <option value={null}>Seleccione un servicio</option>
                {diner.unit?.cafes[0].services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
              <select
                className="p-2 my-2 ms-2 bg-zinc-500 rounded text-white"
                onChange={handlePaymentType}
              >
                <option value={null}>Seleccione tipo de pago</option>
                <option value="1">Crédito</option>
                <option value="2">Efectivo</option>
              </select>

              <p>COSTO: S./ {cost}</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={exportToExcel}
              >
                Reporte en Excel
              </button>
            </div>
          </div>
          <input
            type="submit"
            className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md w-full"
            value="Registrar Venta"
          />
        </form>
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DNI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comensal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sales.map((sale) => (
              <tr key={sale._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sale.bussinesClientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sale.dateTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sale.diner.dinerDni}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sale.diner.dinerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sale.service.serviceName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  S./ {sale.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Editar
                  </button>
                  {/* <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={deleteSale(sale._id)}
                  >
                    Eliminar
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <PermissionsModal
        active={showModal}
        onClose={closeModal}
        role={selectedRole}
        permissions={permissions}
      />
    </div>
  );
}
