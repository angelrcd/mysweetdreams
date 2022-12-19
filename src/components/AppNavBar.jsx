import '../css/MainPage.css'
import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API, SOCIAL } from '../../data'
import UserInfo from './UserInfo'
import { enableScroll, disableScroll } from '../modules/disableEnableScroll'
import { logout } from '../modules/logout'

function AppNavbar () {
  // Detecta si el menu de movil esta abierto
  const [nav, setNav] = useState(true)
  // Detecta si la barra esta visible o no, cambia al hacer scroll
  const [show, setShow] = useState(true)
  // Detecta si el último scroll fue hacia arriba o hacia abajo
  const [lastScrollY, setLastScrollY] = useState(0)
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const handleNav = () => {
    setNav(!nav)
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // si scroll hacia abajo esconde la navbar
        setShow(false)
      } else { // si scroll hacia arriba muestra la navbar
        setShow(true)
      }

      // recuerda la localización actual para usarla en el próximo movimiento
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    if (!nav) {
      disableScroll()
    }

    if (nav) {
      enableScroll()
    }

    return () => {
      enableScroll()
    }
  }, [nav])

  function setYTo0 () {
    window.scrollTo(0, 0)
  }

  async function handleLogout () {
    const logoutResponse = await logout()
    if (logoutResponse === 'OK') {
      return navigate('/login')
    } else {
      alert('Ha ocurrido algun error al cerrar sesión')
    }
  }

  return (
    <div className='text-gray-900 dark:text-gray-200'>
      <nav className={`${show ? 'AppNavVisible' : 'AppNavNotVisible'} z-10 shadow-md w-screen md:w-1/6 md:min-w-[300px] h-10 md:h-screen flex md:flex-col border-r-2 border-black bg-web-fondo dark:bg-web-formBgDarkMode justify-between items-center md:items-start px-4 md:px-0`}>
        <div className='w-full h-full hidden md:block'>
          <UserInfo />
          <section title='settings' className='w-full h-1/2 flex flex-col items-center cursor-pointer bg-web-fondo dark:bg-web-formBgDarkMode'>
            <Link onClick={() => setIndex(0)} to='resume' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-y-2 border-gray-600'><div className={`${index === 0 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Resumen</div></Link>
            <Link onClick={() => setIndex(1)} to='stats' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 1 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Estadísticas</div></Link>
            <Link onClick={() => setIndex(2)} to='calendar' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 2 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Calendario</div></Link>
            <Link onClick={() => setIndex(3)} to='tips' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 3 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Consejos</div></Link>
            <Link onClick={() => setIndex(4)} to='newData' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 4 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Añadir datos</div></Link>
            <div onClick={handleLogout} className='w-5/6 h-1/6 flex justify-center items-center text-xl'><div className={`${index === 5 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Cerrar sesión</div></div>
          </section>
        </div>

        <div onClick={handleNav}>
          <img className='h-[30px] filter dark:invert md:hidden' src="/icons/menu.svg" alt="menu button" />
        </div>
      </nav>
      <div onClick={handleNav} className={!nav ? 'fixed left-0 top-0 w-screen h-screen bg-black opacity-40 z-10' : 'fixed bg-transparent left-0 top-0 w-screen h-screen duration-1000 -z-50'}></div>
      <div className={!nav ? 'fixed right-0 top-0 w-[300px] h-screen flex flex-col  border-gray-700 shadow-2xl dark:border-gray-200 bg-web-fondo dark:bg-web-formBgDarkMode duration-500 z-20' : 'fixed right-[-100%] top-0 w-[300px] h-screen flex flex-col duration-500 z-20'}>
        <img onClick={handleNav} className='h-5 self-end mr-3 mt-3 filter dark:invert' src="/icons/cancel.svg" alt="close menu button" />
        <UserInfo />
        <ul className='p-4 dark:text-gray-100 text-gray-900'>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link className='w-full' to='resume'>Resumen</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link className='w-full' to='stats'>Estadísticas</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link className='w-full' to='calendar'>Calendario</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link className='w-full' to='tips'>Consejos</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link className='w-full' to='newData'>Añadir datos</Link></li>
          <li onClick={handleLogout} className='p-2 border-b border-gray-700 dark:border-gray-100 cursor-pointer'><div>Cerrar sesión</div></li>
        </ul>
        <div className="flex gap-5 px-6">
        <a href={SOCIAL.INSTAGRAM}><img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/instagram.svg" alt="" /></a>
          <a href={SOCIAL.TWITTER}><img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/twitter.svg" alt="" /></a>
          <a href={SOCIAL.FACEBOOK}><img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/facebook.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default AppNavbar
