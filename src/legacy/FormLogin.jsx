import '../css/FormLogin.css'
import Button from './Button.jsx'
import Input from './Input.jsx'
import React, { useState } from 'react'

function FormLogin () {
  const [Logged, setLogged] = useState('false')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  let msgFail = null

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
      setLogged('missed')
      alert('Completa todos los campos')
    } else if (user === 'admin' && pass === '123') { // Habria que crear una funcion que consulte la bbdd
      alert('CORRECTO!!!')
      setLogged('true')
      document.getElementById('form').style.display = 'none'
    } else {
      setLogged('failed')
      alert('Usuario y/o contraseña incorrectos')
    }
  }

  if (Logged === 'failed') {
    msgFail = <p className='text-red-600'>Usuario y/o contraseña incorrectos</p>
  } else if (Logged === 'missed') {
    msgFail = <p className='text-red-600 '>Rellene todos los campos, por favor</p>
  } else {
    msgFail = ''
  }

  return (
    <form id="form" className="h-[600px] w-[450px] bg-white rounded-[40px] flex flex-col justify-around items-center pt-11 shadow-login  border-2 border-black" method="post" action="" onSubmit={handleSubmit}>
      <h3 className="font-quicksand text-3xl text-gray-500"> <strong className="text-black">Bienvenido.</strong> Entra.</h3>
      {msgFail}
      <Input type="text" name="name" id="user-name" placeholder ="User / Email" onChange={handleUser} />
      <Input type="password" name="pass" id="user-pass" placeholder="Password" onChange={handlePass} />
      <Button text="Entrar" onClick={logIn}/>
    </form>
  )
}

export default FormLogin
