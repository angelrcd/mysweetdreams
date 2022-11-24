import '../css/MainPage.css'
import Navbar from '../components/Navbar.jsx'
import FormSignup from '../components/FormSignup.jsx'

function SignupNew () {
  return (
    <>
      <div className="bg-fixed bg-cover bg-[url('/img/background-night.jpg')] h-screen flex flex-col items-center">
      <Navbar />
        <FormSignup id="form-signup" method="post" action="http://localhost:3000/new-user/" />
      </div>
    </>
  )
}

export default SignupNew
