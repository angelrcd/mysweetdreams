import '../css/MainPage.css'
import Button from '../components/Button.jsx'

function UserDataForm () {
  return (
    <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] flex flex-col items-center">
      <div className='flex items-center gap-6 mt-10'>
        <img className='h-[100px]' src="/img/logo.png" alt="logo" />
        <h1 className="text-shadow-2 text-white font-bluetea text-6xl">SWEETDREAMS</h1>
      </div>
      <h2 className="text-shadow-1 text-white font-quicksand text-3xl font-bold text-center my-6 mx-10">Gracias por registrarte, por favor rellena tus datos para que podamos darte un información mas personalizada</h2>
      <form className='w-fit bg-gray-50 dark:bg-[#1b1b32] opacity-95 rounded-[40px] border-2 border-black pt-11 px-16 font-quicksand text-2xl flex flex-col gap-4 mx-5' method="post" action="http://localhost:3000/test/">
        <fieldset className='flex flex-col gap-4 dark:text-[#f5f6f7]'>
          <label htmlFor="name">Nombre<input className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="name" name="name" type="text" placeholder="Introduce tu nombre" required /></label>
          <label htmlFor="lastname">Apellidos<input className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="lastname" name="lastname" type="text" placeholder="Introduce tus apellidos" required /></label>
          <label htmlFor="birthday">Fecha de nacimiento<input className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="birthday" name="birthday" type="date" required /></label>
          <label htmlFor="profilepicture">Foto de perfil<input className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="profilepicture" type="file" name="file" /></label>
        </fieldset>
        <button type="submit" className="font-quicksand font-bold w-fit px-10 mx-auto mt-11 py-2 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton" >
        Enviar y continuar
      </button>
      </form>
      <div className="bg-blue-800 dark:text-black rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100 mb-11 mx-5"><p className="text-white">¿No quieres rellenar tus datos ahora? | <a href="" className="underline">Continuar aquí</a></p></div>
    </div>
  )
}

export default UserDataForm
