import '../css/MainPage.css'
import Input from './Input.jsx'
import React, { useState } from 'react'
import FormFooterText from './FormFooterText.jsx'

function FormLogin (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // JSON que incluye los datos introducidos en el formulario de email y password, actualizados en tiempo real
  const jsonData = {
    email,
    password: pswd
  }

  // Información sobre el tipo de request que se hará en el fetch
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  function handleLogin (event) {
    printErrorMessage()
    event.preventDefault()
    fetch('http://localhost:3000/users/authenticate', options)
      .then(response => {
        switch (response.status) {
          case 200:
            linkToDashboard()
            break
          case 400:
            printErrorMessage(true)
            break
          default:
        }
      })
  }

  // TO DO
  function linkToDashboard () {
    console.log('200')
  }

  function printErrorMessage (codeError = false) {
    let message = ''
    if (email === '' && pswd === '') {
      message = 'Debe rellenar los campos'
    } else if (email === '' && pswd !== '') {
      message = 'Debe introducir su email'
    } else if (email !== '' && pswd === '') {
      message = 'Debe introducir su contraseña'
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      message = 'El email no tiene formato válido'
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(pswd)) {
      message = 'La contraseña no tiene formato válido'
    } else {
      if (codeError) {
        message = 'Usuario o contraseña no valido'
      }
    }
    setErrorMessage(message)
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
          <label htmlFor="email">Email
              <input id="email" name="email" type="email" placeholder="Introduzca email" onChange={ev => setEmail(ev.target.value)} title="Debe ser un email valido" required
              className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:shadow-outline py-2 px-5' />
            </label>
            <label htmlFor="password"><span title="(8 caracteres mínimo, debe tener al menos un número y un caracter especial)">Contraseña</span>
              <input id="password" name="password" type="password" placeholder="Introduzca contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" onChange={ev => setPswd(ev.target.value)} title="Debe tener 8 caracteres o mas, al menos una mayúscula y caracter especial" required
              className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:shadow-outline py-2 px-5' />
            </label>
            <p className='text-red-500 w-[100%]'>{errorMessage}</p>
          </fieldset>
          <button onClick={handleLogin} type="submit" className="mx-auto mt-6 button-web">Iniciar sesión</button>
        </form>
        <FormFooterText text="¿Aún no tienes cuenta?" linkText="Registrate aquí" redirectTo="/Signup" />
    </>
  )
}

export default FormLogin
