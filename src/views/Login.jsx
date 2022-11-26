import '../css/MainPage.css'
import Navbar from '../components/Navbar.jsx'
import FormLogin from '../components/FormLogin'

function Login () {
  return (
    <>
      <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] h-screen flex flex-col items-center">
        <Navbar />
        <FormLogin id="form-signup" method="post" action="http://localhost:3000/test/" />
      </div>
    </>
  )
}

export default Login
