import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function FormNewUser (props) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const params = useParams()
  const userId = params.id
  const url = 'http://localhost:3000/users/' + userId
  const dashboardUrl = '/dashboard/' + userId
  const navigate = useNavigate()

  const jsonData = {
    name,
    lastName,
    birthdate
  }

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  function handleNewData (event) {
    event.preventDefault()
    fetch(url, options)
      .then(response => response.text())
      .then(data => {
        switch (data) {
          case 'User not found':
          case 'Error updating user':
          case 'Invalid user ID':
            printErrorMessage(data)
            break
          default:
            linkToDashboard()
            break
        }
      })
  }

  function printErrorMessage (data) {
    console.log(data)
  }

  function linkToDashboard () {
    return navigate(dashboardUrl)
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-14 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={name} onInput={ev => setName(ev.target.value)} header="Nombre" id="name" type="text" placeholder="Introduce tu nombre" minlength="3" maxlength="20" />
            <Input value={lastName} onInput={ev => setLastName(ev.target.value)} header="Apellidos" id="lastname" type="text" placeholder="Introduce tus apellidos" minlength="3" maxlength="20" />
            <Input value={birthdate} onInput={ev => setBirthdate(ev.target.value)} header="Fecha de nacimiento" id="birthdate" type="date" min="1900-01-01" max="2020-01-01" />
            <Input header="Foto de perfil" id="profilePicture" type="file" min="hola" />
          </fieldset>
          <button onClick={handleNewData} type="submit" className="mx-auto mt-6 button-web">Enviar y continuar</button>
        </form>
        <FormFooterText text="¿No quieres rellenar tus datos ahora?" linkText="Continua aquí" redirectTo="direccion dashboard" />
    </>
  )
}

export default FormNewUser
