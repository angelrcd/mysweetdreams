import './MainPage.css'
import { Link } from 'react-router-dom'

function ButtonComenzar (props) {
  return (
    <Link to={props.to}>
      <button className="font-quicksand font-bold w-fit px-16 h-20 text-3xl bg-web-boton hover:bg-web-boton2 hover:text-white rounded-full mb-10 shadow-lg duration-500 ease-in-out hover:resize hover:ring-2 ring-offset-4 hover:scale-105 ring-web-boton" >
        <span>{props.text}</span>
      </button>
    </Link>

  // <div><li><Link to='/Login'>Login</Link></li></div>
  )
}

export default ButtonComenzar
