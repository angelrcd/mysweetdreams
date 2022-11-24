import '../css/MainPage.css'
import FormNewUser from '../components/FormNewUser.jsx'

function UserDataForm () {
  return (
    <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] flex flex-col items-center">
      <div className='flex items-center gap-6 mt-10'>
        <img className='h-[100px]' src="/img/logo.png" alt="logo" />
        <h1 className="text-shadow-2 text-gray-200 font-bluetea text-6xl">SWEETDREAMS</h1>
      </div>
      <h2 className="text-shadow-1 text-gray-200 font-quicksand text-3xl font-bold text-center mx-10">Gracias por registrarte, por favor rellena tus datos para que podamos darte un información mas personalizada</h2>
      <FormNewUser id="form-new-user" method="post" action="http://localhost:3000/test/" />
    </div>
  )
}

export default UserDataForm
