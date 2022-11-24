import '../css/MainPage.css'
import Button from '../components/Button.jsx'
import Input from '../components/InputNew.jsx'
import FormFooterText from './FormFooterText.jsx'

function FormNewUser (props) {
  return (
    <>
      <form id={props.id} className='w-fit mt-6 bg-gray-100 dark:bg-[#1b1b32] opacity-95 rounded-2xl border-2 border-black pt-11 px-16 font-quicksand text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input header="Nombre" id="name" type="text" placeholder="Introduce tu nombre" />
            <Input header="Apellidos" id="lastname" type="text" placeholder="Introduce tus apellidos" />
            <Input header="Fecha de nacimiento" id="birthdate" type="date" placeholder="hola" />
            <Input header="Foto de perfil" id="profilePicture" type="file" />
          </fieldset>
          <button type="submit" className="font-quicksand font-bold w-fit mx-auto mt-6 px-10 py-2 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton">Enviar y continuar</button>
        </form>
        <FormFooterText text="¿No quieres rellenar tus datos ahora?" linkText="Continua aquí" redirectTo="direccion dashboard" />
    </>
  )
}

export default FormNewUser
