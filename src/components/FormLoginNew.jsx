import '../css/MainPage.css'
import Button from '../components/Button.jsx'
import Input from '../components/InputNew.jsx'
import FormFooterText from './FormFooterText.jsx'

function FormLoginNew (props) {
  return (
    <>
      <form id={props.id} className='w-fit mt-14 bg-gray-100 dark:bg-[#1b1b32] opacity-95 rounded-2xl border-2 border-black pt-11 px-16 font-quicksand text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input header="Email" id="email" type="email" placeholder="Introduce tu email" />
            <Input header="Contraseña" id="password" type="password" placeholder="Introduce tu contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" title="Debe tener 8 caracteres o mas, al menos una mayúscula y caracter especial" />
          </fieldset>
          <button type="submit" className="font-quicksand font-bold w-fit mx-auto mt-6 px-10 py-2 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton">Iniciar sesión</button>
        </form>
        <FormFooterText text="¿Aún no tienes cuenta?" linkText="Registrate aquí" redirectTo="/Signup" />
    </>
  )
}

export default FormLoginNew
