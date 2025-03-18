'use client'

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";


export default function Roles(){

    const { handleSubmit, register, reset } = useForm()

    const [mines, setMines] = useState([])

    const [units, setUnits] = useState([])

   
    const onSubmit = async(data) => {
        try {
          // Enviar los datos del formulario al servidor en el puerto 4000
          const response = await axiosInstance.post('/units', data);
          
          // Si la respuesta es exitosa, redirigir a /organizations
          if (response.status === 201) {
            setUnits([...units, response.data])	
            console.log(response);
            reset()
          }
        } catch (error) {
          // Manejar errores (por ejemplo, credenciales incorrectas)
          console.error('Error al enviar los datos:', error);
          alert('Error al registrar nueva unidad.');
        }
      }

      const deleteUnits = (id) => {
        return async() => {
          try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axiosInstance.delete(`/units/${id}`);
            
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 204) {
              console.log(response);
              setAreas(units.filter(unit => unit._id !== id))
            }
          } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al eliminar unidad.');
          }
      }
      }

      useEffect(() =>{
        axiosInstance.get('/mines')
        .then(response => {
          setMines(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las minas:', error);
        })

        axiosInstance.get('/units')
        .then(response => {
          setUnits(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las minas:', error);
        })

      }, [])
  

    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Unidades mineras
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full">
          <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Nombre de la unidad" {...register("name")}/>
          <select className="p-2 my-2 bg-zinc-500 rounded text-white" {...register("mine")}>
                <option value={null}>Seleccione Mina</option>
                {mines.map(mine =>(
                    <option key={mine._id} value={mine._id}>{mine.name}</option>
                ))}
            </select>              
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Registrar Unidad"/>
          </form>
          <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mina
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {units.map(unit => (
                <tr key={unit._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {unit.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {unit.mine.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={deleteUnits(unit._id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    );
}