'use client'

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import Modal from "../components/modal.js";

export default function Register(){
  
  const router = useRouter()
  
  const { handleSubmit, register } = useForm()

  const [users, setUsers] = useState([])
  const [permissions, setPermissions] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [userSelected, setUserSelected] = useState({})

  useEffect( () =>{
    axiosInstance.get('/users')
    .then((result) => {
        setUsers(result.data)
    }).catch((err) => {
        console.error(err)
    });



  axiosInstance.get('/permissions')
    .then(response => {
      setPermissions(response.data);
    })
    .catch(error => {
      console.error('Error al obtener los permisos:', error);
    })

  }, [])

 

  const onSubmit = async(data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axios.post('http://localhost:4000/api/users', data);
      
      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 201) {
        alert('Usuario registrado OK.');
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error('Error al enviar los datos:', error);
      alert('Error al registrar nuevo usuario.');
    }
  }

  const deleteUser = (id) => {
    
  }
  
  const openModal = (user) => {
    setIsModalOpen(true)
    setUserSelected(user)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Registro de Usuarios
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full" >
          <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Nombre" {...register("name")}/>
          <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Apellido" {...register("lastname")}/>
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Email" {...register("email")}/>
            <input type="password" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Password" {...register("password")}/>
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Registrarse"/>
          </form>
          <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LastName
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
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
                    {user.lastname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => openModal(user)}>Permisos</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={deleteUser(user._id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
        
        <Modal active={isModalOpen} userName={userSelected.name} onClose={closeModal} permissions={permissions} userId={userSelected._id}/>
      </main>
    </div>
    );
}