import '../css/MainPage.css'
import Navbar from '../components/Navbar.jsx'
import FormLoginNew from '../components/FormLoginNew'

function LoginNew () {
  return (
    <>
      <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] h-screen flex flex-col items-center">
        <Navbar />
        <FormLoginNew id="form-signup" method="post" action="http://localhost:3000/test/" />
      </div>
    </>
  )
}

export default LoginNew
