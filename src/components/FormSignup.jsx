import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'
import { useState } from 'react'

function FormSignup (props) {
  const [pswd, setPswd] = useState('')
  const regexp = `^${pswd}$`

  return (
    <>
      <form id={props.id} className='w-fit mt-14 bg-gray-100 dark:bg-web-formBgDarkMode opacity-95 rounded-2xl border-2 border-black pt-11 px-4 md:px-16 font-quicksand text-xl md:text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input header="Email" id="email" type="email" placeholder="Introduce tu email" />
            <label htmlFor="password">Contraseña
              <input id="password" name="password" type="password" placeholder="Introduzca contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" onChange={ev => setPswd(ev.target.value)} title="Debe tener 8 caracteres o mas, al menos una mayúscula y caracter especial" required
              className='bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:shadow-outline py-2 px-5' />
            </label>
            <Input header="Repetir Contraseña" id="validatePassword" type="password" pattern={regexp} placeholder="Vuelva a introducir su contraseña" title="Las contraseñas deben coincidir" />
          </fieldset>
          <button type="submit" className="mx-auto mt-6 button-web">Registrarse</button>
        </form>
        <FormFooterText text="¿Ya tienes cuenta?" linkText="Inicia sesión aquí" redirectTo="/Login" />
    </>
  )
}

export default FormSignup
