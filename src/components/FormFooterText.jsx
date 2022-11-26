import '../css/MainPage.css'
import { Link } from 'react-router-dom'

function FormFooterText (props) {
  return (
    <div className="bg-white dark:bg-[#1b1b32] rounded-xl py-1 px-6 bg-opacity-95 my-2 text-opacity-100 mb-11 mx-5"><p className="dark:text-white">{props.text} | <Link to={props.redirectTo} className="underline cursor-pointer text-web-boton2 duration-500 ease-in-out">{props.linkText}</Link></p></div>
  )
}

export default FormFooterText
