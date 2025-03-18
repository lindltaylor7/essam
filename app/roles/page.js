'use client'

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";


export default function Roles(){

    const { handleSubmit, register, reset } = useForm()

    const [roles, setRoles] = useState([])

    const [sideJob, setSideJob] = useState(0)

    const [selectableSides, setSelectableSides] = useState([])

    const [areas, setAreas] = useState([])

    const [cafes, setCafes] = useState([])

    const [selectedValue, setSelectedValue] = useState(0);

   
    const onSubmit = async(data) => {
        data.entityType = selectedValue
        try {
          // Enviar los datos del formulario al servidor en el puerto 4000
          const response = await axiosInstance.post('/roles', data);
          
          // Si la respuesta es exitosa, redirigir a /organizations
          if (response.status === 201) {
            setRoles([...roles, response.data])	
            console.log(response);
            reset()
          }
        } catch (error) {
          // Manejar errores (por ejemplo, credenciales incorrectas)
          console.error('Error al enviar los datos:', error);
          alert('Error al registrar nuevo rol.');
        }
      }

      const deleteRole = (id) => {
        return async() => {
          try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axiosInstance.delete(`/roles/${id}`);
            
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 204) {
              console.log(response);
              setAreas(roles.filter(role => role._id !== id))
            }
          } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al eliminar rol.');
          }
      }
      }

      useEffect(() =>{
        axiosInstance.get('/roles')
        .then(response => {
          setRoles(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los roles:', error);
        })

        axiosInstance.get('/cafes')
        .then(response => {
          setCafes(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los cafes:', error);
        })

        axiosInstance.get('/areas').then((result) => {
            setAreas(result.data);
        }).catch((error) => {
            console.error('Error al obtener las areas:', error);
        });

      }, [])

      const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        if(event.target.value == 1){
          setSelectableSides(areas)
        }else if(event.target.value == 2){
          setSelectableSides(cafes)
        }
      };
  

    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Roles
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full">
            <div className="w-full mt-3">
              <select className="p-2 my-2 bg-zinc-500 rounded text-white w-75" id="options" value={selectedValue} onChange={handleSelectChange}>
                  <option value={null}>Seleccione lugar de trabajo</option>
                  <option value="1">Area</option>
                  <option value="2">Cafeteria</option>
              </select> 
              <select className="p-2 ms-3 my-2 bg-zinc-500 rounded text-white w-75" {...register("entityId")}>
                  <option value={null} defaultValue>Seleccione Entidad</option>
                  {selectableSides.map(s =>(
                      <option key={s._id} value={s._id}>{s.name}</option>
                  ))}
              </select> 
            </div>
                  
          <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Nombre del Rol" {...register("name")}/>
          <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Descripcion" {...register("description")}/>
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Registrar Rol"/>
          
          </form>
          <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripcion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roles.map(role => (
                <tr key={role._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {role.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {role.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {role.entityType == 1? 'Area' : 'Cafeteria'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {role.status?'Activa':'Inactiva'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Permisos</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={deleteRole(role._id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    );
}