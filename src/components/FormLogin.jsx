import './FormLogin.css'
import ButtonComenzar from './ButtonComenzar.jsx'

function FormLogin () {
  return (
    <form className="h-[600px] w-[450px] bg-white rounded-[40px] flex flex-col justify-around items-center py-11 shadow-login  border-2 border-black" method="post" action="">
      <h3 className="font-bluetea text-3xl text-gray-500"> <strong className="text-black">Welcome.</strong> Please log in</h3>
      <input type="text" name="name" id="user-name" placeholder="User / Email" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mt-8 px-5 font-bluetea text-xl" />
      <input type="password" name="pass" id="user-pass" placeholder="Password" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mb-8 px-5 font-bluetea text-xl" />
      <ButtonComenzar text="Registrarse" />
    </form>
  )
}

export default FormLogin
