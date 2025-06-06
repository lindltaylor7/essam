'use client'

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";


export default function Business(){

    const { handleSubmit, register, reset } = useForm()

    const [businnes, setBusinnes] = useState([])

    const [headquarters, setHeadquarters] = useState([])

    const onSubmit = async(data) => {
        console.log(data);
        try {
          // Enviar los datos del formulario al servidor en el puerto 4000
          const response = await axiosInstance.post('/headquarters', data);
          
          // Si la respuesta es exitosa, redirigir a /organizations
          if (response.status === 201) {
            setHeadquarters([...headquarters, response.data])	
            console.log(response);
            reset()
          }
        } catch (error) {
          // Manejar errores (por ejemplo, credenciales incorrectas)
          console.error('Error al enviar los datos:', error);
          alert('Error al registrar nueva sede.');
        }
      }

      const deleteHeadquarter = (id) => {
        return async() => {
          try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axiosInstance.delete(`/headquarters/${id}`);
            
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 204) {
              console.log(response);
              setAreas(headquarters.filter(headquarter => headquarter._id !== id))
            }
          } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al eliminar sede.');
          }
      }
      }

      useEffect(() =>{
        axiosInstance.get('/businnes')
        .then(response => {
          setBusinnes(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las empresas:', error);
        })

        axiosInstance.get('/headquarters')
        .then((result) => {
            setHeadquarters(result.data);
        }).catch((err) => {
            console.error('Error al obtener las sedes:', err);
        });


      }, [])

    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Sedes
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full" >

          <select className="p-2 my-2 bg-zinc-500 rounded text-white" {...register("businnes")}>
                <option value={null}>Seleccione Empresa</option>
                {businnes.map(b =>(
                    <option key={b._id} value={b._id}>{b.name}</option>
                ))}
            </select> 
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Nombre" {...register("name")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Direccion" {...register("address")}/>
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Registrar Sede"/>
          </form>
          <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Direccion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empresa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {headquarters.map(headquarter => (
                <tr key={headquarter._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {headquarter.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {headquarter.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {headquarter.businnes?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={deleteHeadquarter(headquarter._id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    );
}