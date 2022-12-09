import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormSignup (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const regexp = `^${pswd}$`
  const navigate = useNavigate()

  const jsonData = {
    email,
    password: pswd
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  function handleRegister (event) {
    event.preventDefault()
    fetch('http://localhost:3000/users/add', options)
      .then(response => response.text())
      .then(data => {
        switch (data) {
          case 'Missing parameters':
          case 'Incorrect user/password':
          case 'User already exists':
          case 'Missing user':
            printErrorMessage(400)
            break
          default:
            linkToNewUserForm(data)
            break
        }
      })
  }

  function linkToNewUserForm (data) {
    data = JSON.parse(data)
    const url = '/new-user-form/' + data._id
    return navigate(url)
  }

  function printErrorMessage () {
    console.log('ERROR')
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={email} onInput={ev => setEmail(ev.target.value)} header="Email" id="email" type="email" placeholder="Introduzca email" />
            <Input value={pswd} onInput={ev => setPswd(ev.target.value)} header="Contraseña" id="password" type="password" placeholder="Introduzca contraseña" title="La contraseña debe tener al menos 8 caracter, y al menos un numero y caracter especial" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" />
            <Input header="Repetir Contraseña" id="validatePassword" type="password" pattern={regexp} placeholder="Vuelva a introducir su contraseña" title="Las contraseñas deben coincidir" />
          </fieldset>
          <button onClick={handleRegister} type="submit" className="mx-auto mt-6 button-web">Registrarse</button>
        </form>
        <FormFooterText text="¿Ya tienes cuenta?" linkText="Inicia sesión aquí" redirectTo="/Login" />
    </>
  )
}

export default FormSignup
