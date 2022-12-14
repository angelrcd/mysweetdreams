import '../css/MainPage.css'
import Navbar from '../components/Navbar.jsx'
import FormSignup from '../components/FormSignup.jsx'
import { redirectIfAuthenticated } from '../modules/redirectIfAuthenticated'

function Signup () {
  // Te manda al dashboard si el usuario ya tiene una cookie válida
  redirectIfAuthenticated()

  return (
    <>
    <div className="bg-fixed bg-cover bg-center bg-[url('/img/background-night.jpg')] h-screen flex flex-col items-center">
      <div className='w-screen'>
        <Navbar />
      </div>
      <FormSignup id="form-signup" method="post" action="http://localhost:3000/users/add" />
    </div>
  </>
  )
}

export default Signup
