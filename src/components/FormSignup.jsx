import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormSignup (props) {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [repeatPswd, setRepeatPswd] = useState('')
  const navigate = useNavigate()

  const repeatPasswordRegex = `^${pswd}$`
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

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
    if (emailRegex.test(email) && passwordRegex.test(pswd) && repeatPswd === pswd) {
      event.preventDefault()
      fetch('http://localhost:3000/users/add', options)
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
              linkToNewUserForm(data)
              break
          }
        })
    }
  }

  function linkToNewUserForm (data) {
    data = JSON.parse(data)
    const url = '/new-user-form/' + data._id
    return navigate(url)
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-20 md:mt-32 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={email} onInput={ev => setEmail(ev.target.value)} header="Email" id="email" type="email" placeholder="Introduzca email" />
            <Input value={pswd} onInput={ev => setPswd(ev.target.value)} header="Contraseña" id="password" type="password" placeholder="Introduzca contraseña" title="La contraseña debe tener al menos 8 caracteres, y al menos una mayúscula, número y caracter especial" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" />
            <Input value={repeatPswd} onInput={ev => setRepeatPswd(ev.target.value)} header="Repetir Contraseña" id="validatePassword" type="password" pattern={repeatPasswordRegex} placeholder="Vuelva a introducir su contraseña" title="Las contraseñas deben coincidir" />
          </fieldset>
          <button onClick={handleRegister} type="submit" className="mx-auto mt-6 button-web">Registrarse</button>
        </form>
        <FormFooterText text="¿Ya tienes cuenta?" linkText="Inicia sesión aquí" redirectTo="/Login" />
    </>
  )
}

export default FormSignup
