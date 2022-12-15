import '../css/MainPage.css'
import FormNewUser from '../components/FormNewUser.jsx'

function UserDataForm () {
  return (
    <div className="bg-fixed bg-cover bg-center bg-[url('/img/background-night.jpg')] flex flex-col items-center">
      <div className='flex flex-wrap justify-center items-center gap-1 md:gap-6 mt-10 mx-8 mb-6'>
        <img className='h-[50px] md:h-[80px]' src="/img/logo.png" alt="logo" />
        <h1 className="text-shadow-2 text-gray-200 font-bluetea text-3xl md:text-5xl hidden min-[385px]:flex">MYSWEETDREAMS</h1>
      </div>
      <h2 className="text-shadow-1 text-gray-200 font-quicksand text-lg md:text-2xl lg:text-3xl font-bold text-center mx-2 md:mx-8 lg:mx-10">Gracias por registrarte, por favor rellena tus datos para que podamos darte una información mas personalizada</h2>
      <FormNewUser id="form-new-user" />
    </div>
  )
}

export default UserDataForm
