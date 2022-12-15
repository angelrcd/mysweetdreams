import '../css/MainPage.css'
import Input from './Input.jsx'
import React, { useState } from 'react'
import FormFooterText from './FormFooterText.jsx'
import { useNavigate } from 'react-router-dom'
import { isFormValid } from '../modules/isFormValid'
import { API, EMAIL_REGEX, PSWD_REGEX } from '../../data'

function FormLogin (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const navigate = useNavigate()

  // JSON que incluye los datos introducidos en el formulario, actualizados en tiempo real
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

  // Hace un fetch si los campos del formulario son correctos
  function handleLogin (event) {
    if (isFormValid(email, EMAIL_REGEX) && isFormValid(pswd, PSWD_REGEX)) {
      event.preventDefault()
      fetch(API.AUTH, options)
        .then(response => response.text())
        .then(data => {
          switch (data) {
            case 'Invalid user/password':
              alert('Usuario o contraseña inválidos')
              break
            default:
              redirectToDashboard(data)
              break
          }
        })
    }
  }

  function redirectToDashboard (data) {
    return navigate('/app')
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5'>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={email} onInput={ev => setEmail(ev.target.value)} header="Email" id="email" type="email" placeholder="Introduzca email" />
            <Input value={pswd} title="La contraseña debe tener al menos 8 caracteres, y al menos una mayúscula, número y caracter especial" onInput={ev => setPswd(ev.target.value)} header="Contraseña" id="password" type="password" placeholder="Introduzca contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" />
          </fieldset>
          <button onClick={handleLogin} type="submit" className="mx-auto mt-6 button-web">Iniciar sesión</button>
        </form>
        <FormFooterText text="¿Aún no tienes cuenta?" linkText="Registrate aquí" redirectTo="/signup" />
    </>
  )
}

export default FormLogin
