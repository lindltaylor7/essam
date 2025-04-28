"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function Divisions() {
  const [dishes, setDishes] = useState([]);
  const [searchWord, setSearchword] = useState("");

  const searchDish = (e) => {
    console.log(e.target.value);
    axiosInstance
      .get(`/search-dishes/${e.target.value}`)
      .then((result) => {
        setDishes(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Quebrados
      </h1>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Buscar plato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              onKeyUp={searchDish}
              placeholder="Nombre del Plato"
              required
              className="flex-1 p-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <div className="w-full border border-zinc-300 rounded-md">
              {dishes?.map((dish) => (
                <p
                  key={dish._id}
                  className="hover:bg-blue-500 hover:text-white p-2 cursor-pointer"
                >
                  {dish.id} - {dish.nombre}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4"></div>
    </>
  );
}
