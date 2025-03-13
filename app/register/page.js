'use client'

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register(){
    const router = useRouter()
  const { handleSubmit, register } = useForm()

  const onSubmit = async(data) => {
    try {
      // Enviar los datos del formulario al servidor en el puerto 4000
      const response = await axios.post('http://essam.fun:4000/api/users', data);
      
      // Si la respuesta es exitosa, redirigir a /organizations
      if (response.status === 200) {
        alert('Usuario registrado OK.');
      }
    } catch (error) {
      // Manejar errores (por ejemplo, credenciales incorrectas)
      console.error('Error al enviar los datos:', error);
      alert('Error al registrar nuevo usuario.');
    }
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
      </main>
    </div>
    );
}