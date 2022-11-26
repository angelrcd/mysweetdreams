import '../css/MainPage.css'
import Input from './Input.jsx'
import FormFooterText from './FormFooterText.jsx'

function FormNewUser (props) {
  return (
    <>
      <form id={props.id} className='w-fit mt-6 bg-gray-100 dark:bg-[#1b1b32] opacity-95 rounded-2xl border-2 border-black pt-11 px-16 font-quicksand text-2xl flex flex-col gap-4 mx-5' method={props.method} action={props.action}>
          <fieldset className='flex flex-col gap-4 dark:text-gray-50'>
            <Input header="Nombre" id="name" type="text" placeholder="Introduce tu nombre" minlength="3" maxlength="20" />
            <Input header="Apellidos" id="lastname" type="text" placeholder="Introduce tus apellidos" minlength="3" maxlength="20" />
            <Input header="Fecha de nacimiento" id="birthdate" type="date" min="1900-01-01" max="2020-01-01" />
            <Input header="Foto de perfil" id="profilePicture" type="file" min="hola" />
          </fieldset>
          <button type="submit" className="mx-auto mt-6 button-web">Enviar y continuar</button>
        </form>
        <FormFooterText text="¿No quieres rellenar tus datos ahora?" linkText="Continua aquí" redirectTo="direccion dashboard" />
    </>
  )
}

export default FormNewUser
