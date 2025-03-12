'use client'
/* import Navbar from "./navbar.js"; */
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    router.push('/organizations')
  }

  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-left">
          Control de Comensales
        </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded p-5 bg-zinc-800 flex flex-col w-full" >
            <input type="text" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Email" {...register("email")}/>
            <input type="password" className="p-2 my-2 bg-zinc-500 rounded" placeholder="Password" {...register("password")}/>
            <input type="submit" className="bg-[#3B5998] text-white px-4 py-2 mt-4 rounded-md" value="Ingresar"/>
          </form>
      </main>
    </div>
    </>
  );
}
