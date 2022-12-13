import '../css/MainPage.css'
import Input from './Input.jsx'
import React, { useState } from 'react'
import FormFooterText from './FormFooterText.jsx'
import { useNavigate } from 'react-router-dom'

function FormLogin (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const navigate = useNavigate()

  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

  // JSON que incluye los datos introducidos en el formulario de email y password, actualizados en tiempo real
  const jsonData = {
    email,
    password: pswd
  }

  // Información sobre el tipo de request que se hará en el fetch
  const options = {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  function handleLogin (event) {
    if (emailRegex.test(email) && passwordRegex.test(pswd)) {
      event.preventDefault()
      fetch('http://localhost:3000/auth/', options)
        .then(response => response.text())
        .then(data => {
          switch (data) {
            case 'Invalid user/password':
              alert('Usuario o contraseña inválidos')
              break
            default:
              linkToDashboard(data)
              break
          }
        })
    }
  }

  // TO DO
  function linkToDashboard (data) {
    return navigate('/dashboard/')
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={email} onInput={ev => setEmail(ev.target.value)} header="Email" id="email" type="email" placeholder="Introduzca email" />
            <Input value={pswd} title="La contraseña debe tener al menos 8 caracteres, y al menos una mayúscula, número y caracter especial" onInput={ev => setPswd(ev.target.value)} header="Contraseña" id="password" type="password" placeholder="Introduzca contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" />
          </fieldset>
          <button onClick={handleLogin} type="submit" className="mx-auto mt-6 button-web">Iniciar sesión</button>
        </form>
        <FormFooterText text="¿Aún no tienes cuenta?" linkText="Registrate aquí" redirectTo="/Signup" />
    </>
  )
}

export default FormLogin
