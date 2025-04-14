"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";

export default function Facturas() {
  const { register, handleSubmit } = useForm();
  const [factura, setFactura] = useState(null);
  const [invoiceStatus, setInvoiceStatus] = useState([]);

  const crearFactura = async (data) => {
    const response = await axiosInstance.post("/invoices", data);
    console.log(response);
    if (response.status == 200) {
      setFactura(response.data);
      alert(response.data.message);
    }
  };

  const enviarSunat = async () => {
    await axiosInstance.post("/send-invoices-sunat", {
      xml: factura.xml,
    });
    alert("Factura enviada a SUNAT");
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-6 p-3">
      <h2 className="text-xl font-semibold text-gray-800 py-4">
        Generar Factura Electrónica
      </h2>
      <form onSubmit={handleSubmit(crearFactura)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            {...register("rucEmisor")}
            placeholder="RUC Emisor"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("razonSocialEmisor")}
            placeholder="Razón Social Emisor"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("rucCliente")}
            placeholder="RUC Cliente"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("razonSocialCliente")}
            placeholder="Razón Social Cliente"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("serie")}
            placeholder="Serie"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("correlativo")}
            placeholder="Correlativo"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="date"
            {...register("fechaEmision")}
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            {...register("moneda")}
            placeholder="Moneda (PEN/USD)"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="number"
            step="0.01"
            {...register("total")}
            placeholder="Total"
            required
            className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 my-2"
        >
          Generar Factura
        </button>
      </form>

      {factura && (
        <div>
          <h2>Factura Generada</h2>
          <button
            onClick={enviarSunat}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 my-2"
          >
            Enviar a SUNAT
          </button>
        </div>
      )}
    </div>
  );
}
