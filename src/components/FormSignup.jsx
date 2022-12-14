import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API, EMAIL_REGEX, PSWD_REGEX } from '../../data'

function FormSignup (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [repeatPswd, setRepeatPswd] = useState('')
  const navigate = useNavigate()

  // Expresion regular que comprueba que sea igual que lo escrito en el campo de la contraseña
  const repeatPasswordRegex = `^${pswd}$`

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
  function handleRegister (event) {
    if (EMAIL_REGEX.test(email) && PSWD_REGEX.test(pswd) && repeatPswd === pswd) {
      event.preventDefault()
      fetch(API.USERS.ADD, options)
        .then(response => response.text())
        .then(data => {
          switch (data) {
            case 'Missing parameters':
            case 'Incorrect user/password':
            case 'User already exists':
            case 'Missing user':
              alert('Usuario o contraseña inválidos')
              break
            default:
              redirectToNewUserForm(data)
              break
          }
        })
    }
  }

  function redirectToNewUserForm (data) {
    return navigate('/new-user-form')
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5'>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={email} onInput={ev => setEmail(ev.target.value)} header="Email" id="email" type="email" placeholder="Introduzca email" />
            <Input value={pswd} onInput={ev => setPswd(ev.target.value)} header="Contraseña" id="password" type="password" placeholder="Introduzca contraseña" title="La contraseña debe tener al menos 8 caracteres, y al menos una mayúscula, número y caracter especial" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" />
            <Input value={repeatPswd} onInput={ev => setRepeatPswd(ev.target.value)} header="Repetir Contraseña" id="validatePassword" type="password" pattern={repeatPasswordRegex} placeholder="Vuelva a introducir su contraseña" title="Las contraseñas deben coincidir" />
          </fieldset>
          <button onClick={handleRegister} type="submit" className="mx-auto mt-6 button-web">Registrarse</button>
        </form>
        <FormFooterText text="¿Ya tienes cuenta?" linkText="Inicia sesión aquí" redirectTo="/login" />
    </>
  )
}

export default FormSignup
