import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import { API } from '../../data'

function FormNewUser (props) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const navigate = useNavigate()

  const jsonData = {
    name,
    lastName,
    birthdate
  }

  const options = {
    credentials: 'include',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }

  function areFormsValid () {
    const isNameValid = (name.length >= 3 && name.length <= 20)
    const isLastNameValid = (lastName.length >= 3 && lastName.length <= 20)
    const isBirthdateValid = moment(birthdate).isValid() &&
      moment(birthdate).isAfter(moment('1900-01-01')) &&
      moment(birthdate).isBefore(moment('2020-01-01'))
    return isNameValid && isLastNameValid && isBirthdateValid
  }

  function handleNewData (event) {
    if (areFormsValid()) {
      event.preventDefault()
      fetch(API.USERS.MY_USER, options)
        .then(response => response.text())
        .then(data => {
          switch (data) {
            case 'User not found':
            case 'Error updating user':
            case 'Invalid user ID':
              console.log('ERROR')
              break
            default:
              linkToDashboard(data)
              break
          }
        })
    }
  }

  function linkToDashboard (data) {
    return navigate('/dashboard')
  }

  return (
    <>
      <form id={props.id} className='w-fit mt-14 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5'>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input value={name} onInput={ev => setName(ev.target.value)} header="Nombre" id="name" type="text" placeholder="Introduce tu nombre" minlength="3" maxlength="20" />
            <Input value={lastName} onInput={ev => setLastName(ev.target.value)} header="Apellidos" id="lastname" type="text" placeholder="Introduce tus apellidos" minlength="3" maxlength="20" />
            <Input value={birthdate} onInput={ev => setBirthdate(ev.target.value)} header="Fecha de nacimiento" id="birthdate" type="date" min="1900-01-01" max="2020-01-01" />
            {// <Input header="Foto de perfil" id="profilePicture" type="file" min="hola" />
            }
          </fieldset>
          <button onClick={handleNewData} type="submit" className="mx-auto mt-6 button-web">Enviar y continuar</button>
        </form>
        <FormFooterText text="¿No quieres rellenar tus datos ahora?" linkText="Continua aquí" redirectTo="/dashboard" />
    </>
  )
}

export default FormNewUser