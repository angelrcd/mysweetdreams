import '../css/MainPage.css'
import { Link } from 'react-router-dom'

function Navbar (props) {
  return (
    <nav className={`flex px-14 justify-between py-4 ${props.background}`}>
        <Link to='/'><div className='flex items-center gap-6 '>
            <img className='h-[100px]' src="/img/logo.png" alt="logo" />
            <h1 className="text-shadow-2 text-white font-bluetea text-6xl">SWEETDREAMS</h1>
        </div></Link>
        <ul className=' justify-self-end flex gap-5 text-2xl font-quicksand text-white text-shadow-1a items-center font-semibold text-shadow-1'>
            <li className='hover:text-web-boton duration-300 ease-in-out'><Link to='/Login'>Iniciar sesión</Link></li>
            <li className='hover:text-web-boton duration-300 ease-in-out'><Link to='/Signup'>Registrarse</Link></li>
            <li className='hover:text-web-boton duration-300 ease-in-out'><Link to='/Who'>Quienes somos</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
