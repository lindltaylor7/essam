'use client'

import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";


export default function Users(){

    const { handleSubmit, register, reset } = useForm()

    const [businnes, setBusinnes] = useState([])

    const [users, setUsers] = useState([])

    const [entities, setEntities] = useState([])

    const [rolesEntity, setRolesEntity] = useState([])

    const [entitySelected, setEntitySelected] = useState(0)

    const [entityIdSelected, setEntityIdSelected] = useState(0)

    const [areas, setAreas] = useState([])

    const [roles, setRoles] = useState([])

    const [cafes, setCafes] = useState([])

    const onSubmit = async(data) => {
        data.entityType = entitySelected
        data.entityId = entityIdSelected
        console.log(data);
        try {
          // Enviar los datos del formulario al servidor en el puerto 4000
          const response = await axiosInstance.post('/users', data);
          
          // Si la respuesta es exitosa, redirigir a /organizations
          if (response.status === 201) {
            setUsers([...users, response.data])	
            console.log(response);
            reset()
          }
        } catch (error) {
          // Manejar errores (por ejemplo, credenciales incorrectas)
          console.error('Error al enviar los datos:', error);
          alert('Error al registrar nuevo usuario.');
        }
      }

      const deleteUser = (id) => {
        return async() => {
          try {
            // Enviar los datos del formulario al servidor en el puerto 4000
            const response = await axiosInstance.delete(`/users/${id}`);
            
            // Si la respuesta es exitosa, redirigir a /organizations
            if (response.status === 204) {
              console.log(response);
              setAreas(areas.filter(area => area._id !== id))
            }
          } catch (error) {
            // Manejar errores (por ejemplo, credenciales incorrectas)
            console.error('Error al enviar los datos:', error);
            alert('Error al eliminar area.');
          }
      }
      }

      useEffect(() =>{
        axiosInstance.get('/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los usuarios:', error);
        })

        axiosInstance.get('/roles')
        .then(response => {
          setRoles(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las roles:', error);
        })

        axiosInstance.get('/areas')
        .then(response => {
          setAreas(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los areas:', error);
        })

        axiosInstance.get('/cafes')
        .then((result) => {
            setCafes(result.data);
        }).catch((err) => {
            console.error('Error al obtener las cafes:', err);
        });


      }, [])

      const selectEntity = (e) => {
        setEntitySelected(e.target.value)
        if(e.target.value == 1){
          setEntities(areas)
        }else if (e.target.value == 2){
          setEntities(cafes)
        }
      }

      const selectRolesEntity = (e) =>{
      setEntityIdSelected(e.target.value)
       const {roles} = entities.find(entity => entity._id == e.target.value)
       console.log(roles);
       setRolesEntity(roles)
      }


    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Usuarios
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full" >
            <div className="w-full">
            <select className="p-2 my-2 bg-zinc-500 rounded text-white w-50" onChange={selectEntity}>
                <option value={null}>Seleccione Entidad</option>
                <option value={1}>Areas</option>
                <option value={2}>Cafeterias</option>
            </select> 
            <select className="p-2 my-2 ms-2 bg-zinc-500 rounded text-white w-50" onChange={selectRolesEntity}>
                <option value={null}>Seleccione </option>
                {entities.map(entity =>(
                    <option key={entity._id} value={entity._id}>{entity.name}</option>
                ))}
            </select>
            </div>
            
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Nombre" {...register("name")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="DNI" {...register("dni")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Cuenta bancaria" {...register("payrollAccount")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Grado" {...register("degree")}/>
            <select className="p-2 my-2 bg-zinc-500 rounded text-white" {...register("role")}>
                <option value={null}>Seleccione Rol</option>
                {rolesEntity.map(r =>(
                    <option key={r._id} value={r._id}>{r.name}</option>
                ))}
            </select> 
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Email" {...register("email")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Password" {...register("password")}/>
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Registrar Usuario"/>
          </form>
          <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DNI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
                <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.dni}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.entityType == 1? 'Area' : 'Cafeteria'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={deleteUser(user._id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    );
}