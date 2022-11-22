import '../css/MainPage.css'

function UserDataForm () {
  return (
    <div className="bg-fixed h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col items-center">
      <div className='flex items-center gap-6 '>
        <img className='h-[100px]' src="/img/logo.png" alt="logo" />
        <h1 className="text-shadow-2 text-white font-bluetea text-6xl">SWEETDREAMS</h1>
      </div>
      <h2 className="text-shadow-1 text-white font-quicksand text-2xl">Gracias por registrarte, por favor rellena tus datos para que podamos darte un información mas personalizada</h2>
      <form className='w-1/2 bg-white' method="post" action="direccion api backend">
        <fieldset>
        <label htmlFor="first-name">Nombre<input id="first-name" name="first-name" type="text" required /></label>
        <label htmlFor="last-name">Apellidos<input id="last-name" name="last-name" type="text" required /></label>
        <label htmlFor="birthday">Fecha de nacimiento<input id="birthday" name="birthday" type="date" required /></label>
        </fieldset>
        <fieldset>
          <label htmlFor="profile-picture">Foto de perfil<input id="profile-picture" type="file" name="file" /></label>
        </fieldset>
      </form>
    </div>
  )
}

export default UserDataForm
