"use client";

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import PermissionsModal from "../components/PermissionsModal";
import { useAppAuth } from "../context";
import { showErrorAlert, showSuccessAlert } from "../libs/swal";
import { utils, writeFile } from "xlsx";
import Ticket from "../components/Ticket";
import { pdf } from "@react-pdf/renderer";
import { DateTime } from "luxon";
import { FaPrint } from "react-icons/fa6";

export default function Sales() {
  const { user } = useAppAuth();

  const { handleSubmit, register, reset } = useForm();

  const [roles, setRoles] = useState([]);

  const [sales, setSales] = useState([]);

  const [units, setUnits] = useState([]);

  const [dinerDni, setDinerDni] = useState("");

  const [dinerName, setDinerName] = useState("");

  const [services, setServices] = useState([]);

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
        diner: {
          dinerId: diner._id,
          dinerName: dinerName,
          dinerDni: diner.dni,
          businnesClient: {
            name: diner.businnesClient.name,
          },
        },
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

  useEffect(() => {
    if (user && user.entityType && user.entityType == 2) {
      const cafeSelected = cafes.find((cafe) => cafe._id == user.entity._id);
      console.log(cafeSelected);
      setServices(cafeSelected?.services);
    }
  }, [cafes]);

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
        setDinerName(response.data.name);
      })
      .catch((error) => {
        alert("Comensal no encontrado");
        console.error("Error al obtener los datos del comensal:", error);
      });
  };
  const [currentDateTime, setCurrentDateTime] = useState("");

  const handleService = (e) => {
    const serviceId = e.target.value;
    const serviceSelected = services.find(
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

  const handleGeneratePDF = async (sale) => {
    if (typeof window !== "undefined") {
      const blob = await pdf(<Ticket sale={sale} />).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    }
  };

  const formatDate = (date) => {
    const localDate = DateTime.fromISO(date).setZone("America/Lima");
    const formattedDate = localDate.toFormat("dd-MM-yyyy HH:mm:ss");

    return formattedDate;
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Gestión de Ventas
      </h1>

      <form
        className="bg-white rounded-lg p-6 space-y-4 max-w-full w-full mx-auto mb-4 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-red-500 mb-1">
              Fecha *
            </label>
            <p className="font-medium text-gray-700">
              <input
                type="date"
                className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
                placeholder="Fecha"
              />
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Dni del Comensal"
                onChange={(e) => setDinerDni(e.target.value)}
              />
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-md transition-colors duration-200 shadow-sm"
                onClick={searchDiner}
                type="button"
              >
                Buscar
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-700">
                <input
                  type="text"
                  className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
                  placeholder="Nombre del Comensal"
                  value={dinerName || ""}
                  onChange={(e) => setDinerName(e.target.value)}
                />
              </p>
              <p className="font-medium text-gray-700">
                Unidad: <span className="font-normal">{diner.unit?.name}</span>
              </p>
              <p className="font-medium text-gray-700">
                Cafetería:{" "}
                <span className="font-normal">{user.entity?.name}</span>
              </p>
              <p className="font-medium text-gray-700">
                Empresa Cliente:{" "}
                <span className="font-normal">
                  {diner.businnesClient?.name}
                </span>
              </p>
              <p className="font-medium text-gray-700">
                Codigo de Registro:{" "}
                <span className="font-normal">{diner.registerCode}</span>
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-red-500 mb-1">
                Servicio *
              </label>
              <select
                className="w-full p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                onChange={handleService}
              >
                <option value={null}>Seleccione un servicio</option>
                {services?.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <p className="font-medium text-gray-700">
                <input
                  type="number"
                  className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
                  placeholder="Cantidad"
                />
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-red-500 mb-1">
                Tipo de pago *
              </label>
              <div className="space-y-2">
                <div className="flex flex-col space-y-3">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-red-600 border-zinc-300 focus:ring-2 focus:ring-red-500"
                      name="paymentType"
                      value="1"
                      onChange={handlePaymentType}
                    />
                    <span className="ml-2 text-zinc-700">Crédito</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-red-600 border-zinc-300 focus:ring-2 focus:ring-red-500"
                      name="paymentType"
                      value="2"
                      onChange={handlePaymentType}
                    />
                    <span className="ml-2 text-zinc-700">Al Contado</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-red-500 mb-1">
                Medio de Pago *
              </label>
              <select className="w-full p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value={null}>Seleccione un medio de Pago</option>
                <option value="1">Yape - Plin</option>
                <option value="2">Transferencia</option>
                <option value="3">Efectivo</option>
              </select>
            </div>
            <p className="text-lg font-semibold text-gray-800">
              COSTO: S./ {cost}
            </p>

            <button
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm w-full"
              onClick={exportToExcel}
              type="button"
            >
              Reporte en Excel
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Registrar Venta
        </button>
      </form>

      <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden mt-6">
        <thead className="bg-red-500">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Cliente
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              DNI
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Comensal
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Servicio
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sales.map((sale) => (
            <tr
              key={sale._id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {sale.bussinesClientName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(sale.dateTime)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {sale.diner?.dinerDni}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {sale.diner?.dinerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {sale.service?.serviceName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                S./ {sale.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex align-center">
                <button
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm mr-2 cursor-pointer"
                  onClick={() => handleGeneratePDF(sale)}
                >
                  <FaPrint />
                </button>
                <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PermissionsModal
        active={showModal}
        onClose={closeModal}
        role={selectedRole}
        permissions={permissions}
      />
    </>
  );
}
