import '../css/MainPage.css'
import { Link } from 'react-router-dom'

function Button (props) {
  return (
    <Link to={props.to}>
      <button form={props.form} type={props.type} className="font-quicksand font-bold w-fit px-10 py-2 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton" >
        <span>{props.text}</span>
      </button>
    </Link>
  )
}

export default Button
