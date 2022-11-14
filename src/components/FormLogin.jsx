import './FormLogin.css'
import ButtonComenzar from './ButtonComenzar.jsx'
import React, { useState } from 'react'

function FormLogin () {
  const [Logged, setLogged] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleUser = (event) => {
    setUser(event.target.value)
  }

  const handlePass = (event) => {
    setPass(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const logIn = () => {
    if (user.length === 0 || pass.length === 0) {
      alert('Completa todos los campos')
    } else if (user === 'admin' && pass === '123') { // Habria que crear una funcion que consulte la bbdd
      alert('CORRECTO!!!')
      setLogged(true)
      document.getElementById('form').style.display = 'none'
    } else {
      alert('Usuario y/o contraseña incorrectos')
    }
  }

  return (
    <form id="form" className="h-[600px] w-[450px] bg-white rounded-[40px] flex flex-col justify-around items-center py-11 shadow-login  border-2 border-black" method="post" action="" onSubmit={handleSubmit}>
      <h3 className="font-bluetea text-3xl text-gray-500"> <strong className="text-black">Bienvenido.</strong> Entra.</h3>
      <input type="text" name="name" id="user-name" placeholder="User / Email" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mt-8 px-5 font-bluetea text-xl" onChange={handleUser}/>
      <input type="password" name="pass" id="user-pass" placeholder="Password" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mb-8 px-5 font-bluetea text-xl" onChange={handlePass}/>
      <ButtonComenzar text="Entrar" fcn={logIn}/>
    </form>
  )
}

export default FormLogin
