import '../css/MainPage.css'
import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API, SOCIAL } from '../../data'
import UserInfo from './UserInfo'
import { enableScroll, disableScroll } from '../modules/disableEnableScroll'
import { logout } from '../modules/logout'

function AppNavbarTest () {
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
    <div className='w-1/5 h-full bg-red-400'>
        <div className='w-full h-[50%] bg-blue-400'>
            <UserInfo />
        </div>
        <section title='settings' className='w-full h-[50%] flex flex-col items-center cursor-pointer bg-web-fondo dark:bg-web-formBgDarkMode'>
            <Link onClick={() => setIndex(0)} to='resume' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-y-2 border-gray-600'><div className={`${index === 0 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Resumen</div></Link>
            <Link onClick={() => setIndex(1)} to='stats' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 1 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Estadísticas</div></Link>
            <Link onClick={() => setIndex(2)} to='calendar' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 2 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Calendario</div></Link>
            <Link onClick={() => setIndex(3)} to='tips' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 3 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Consejos</div></Link>
            <Link onClick={() => setIndex(4)} to='newData' className='w-5/6 h-1/6 flex justify-center items-center text-xl border-b-2 border-gray-600'><div className={`${index === 4 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Añadir datos</div></Link>
            <div onClick={handleLogout} className='w-5/6 h-1/6 flex justify-center items-center text-xl'><div className={`${index === 5 ? 'bg-blue-400 dark:text-gray-900' : 'hover:bg-gray-200 dark:hover:bg-slate-700'} rounded-md hover:scale-105 px-8 py-2`}>Cerrar sesión</div></div>
        </section>
    </div>
  )
}

export default AppNavbarTest
