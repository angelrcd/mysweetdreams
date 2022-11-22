import '../css/MainPage.css'

function UserDataForm () {
  return (
    <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] flex flex-col items-center">
      <div className='flex items-center gap-6 mt-10'>
        <img className='h-[100px]' src="/img/logo.png" alt="logo" />
        <h1 className="text-shadow-2 text-white font-bluetea text-6xl">SWEETDREAMS</h1>
      </div>
      <h2 className="text-shadow-1 text-white font-quicksand text-3xl font-bold text-center my-6">Gracias por registrarte, por favor rellena tus datos para que podamos darte un información mas personalizada</h2>
      <form className='w-fit bg-gray-50 rounded-[40px] border-2 border-black pt-11 px-16 font-quicksand text-2xl flex flex-col gap-4' method="post" action="direccion api backend">
        <fieldset className='flex flex-col gap-4'>
        <label htmlFor="first-name">Nombre<input className='bg-gray-200 w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="first-name" name="first-name" type="text" placeholder="Introduce tu nombre" required /></label>
        <label htmlFor="last-name">Apellidos<input className='bg-gray-200 w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="last-name" name="last-name" type="text" placeholder="Introduce tus apellidos" required /></label>
        <label htmlFor="birthday">Fecha de nacimiento<input className='bg-gray-200 w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="birthday" name="birthday" type="date" required /></label>
        </fieldset>
        <fieldset>
          <label htmlFor="profile-picture">Foto de perfil<input className='bg-gray-200 w-full rounded-md focus:outline-web-boton focus:shadow-outline py-2 px-5' id="profile-picture" type="file" name="file" /></label>
        </fieldset>
        <input className="cursor-pointer mx-auto mt-11 font-quicksand font-bold w-fit px-6 py-2 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton" type="submit" value="Enviar y continuar" />
      </form>
      <div className="bg-blue-800 rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100 mb-11"><p className="text-white">¿No quieres rellenar tus datos ahora? | <a href="" className="underline">Continuar aquí</a></p></div>
    </div>
  )
}

export default UserDataForm
