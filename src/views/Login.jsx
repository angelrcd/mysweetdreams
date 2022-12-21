import '../css/MainPage.css'
import Navbar from '../components/Navbar.jsx'
import FormLogin from '../components/FormLogin'
import { redirectIfAuthenticated } from '../modules/redirectIfAuthenticated'

function Login () {
  // Te manda al dashboard si el usuario ya tiene una cookie válida
  redirectIfAuthenticated()

  return (
    <>
      <div className="bg-fixed bg-cover bg-center bg-[url('/img/background-night.jpg')] h-screen flex flex-col items-center">
        <div className='w-screen'>
          <Navbar />
        </div>
        <FormLogin id="form-signup" />
      </div>
    </>
  )
}

export default Login
