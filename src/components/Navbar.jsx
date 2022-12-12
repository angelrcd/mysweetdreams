import '../css/MainPage.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  // Detecta si el menu de movil esta abierto
  const [nav, setNav] = useState(true)
  // Detecta si la barra esta visible o no, cambia al hacer scroll
  const [show, setShow] = useState(true)
  // Detecta si el último scroll fue hacia arriba o hacia abajo
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleNav = () => {
    setNav(!nav)
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // si scroll hacia abajo esconde la navbar
        setShow(false)
        console.log(show)
        console.log(window.scrollY)
      } else { // si scroll hacia arriba muestra la navbar
        setShow(true)
        console.log(show)
        console.log(window.scrollY)
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

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

  function preventDefault (e) {
    e.preventDefault()
  }

  function preventDefaultForScrollKeys (e) {
    if (keys[e.keyCode]) {
      preventDefault(e)
      return false
    }
  }

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true }
    }))
  } catch (e) {}

  const wheelOpt = supportsPassive ? { passive: false } : false
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

  function disableScroll () {
    window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
  }

  function enableScroll () {
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    window.removeEventListener('touchmove', preventDefault, wheelOpt)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  }

  function setYTo0 () {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className={`${show ? 'navVisible' : 'navNotVisible'} ${window.scrollY === 0 ? 'md:h-20 md:bg-transparent border-transparent' : 'md:bg-gray-200 md:dark:bg-web-formBgDarkMode border-gray-400'} z-10 w-screen border-b flex justify-between items-center h-10 mx-auto px-4 text-black  bg-white dark:bg-web-formBgDarkMode`}>
        <Link onClick={setYTo0} to='/'><div className='flex items-center gap-5 ml-4'>
          <img className={`${window.scrollY === 0 ? 'md:h-[70px]' : ''} h-[40px] duration-300 ease-in-out`} src="/img/logo.png" alt="logo" />
          <h1 className={`${window.scrollY === 0 ? 'md:text-3xl text-shadow-1 lg:text-shadow-2' : 'md:text-xl md:text-gray-900 md:dark:text-gray-200'} hidden md:hidden xl:block w-full duration-300 ease-in-out text-white font-bluetea`}>SWEETDREAMS</h1>
        </div></Link>
        <ul className={`${window.scrollY === 0 ? 'text-2xl text-shadow-1 text-white' : 'text-lg text-gray-900 dark:text-gray-200'} hidden md:flex font-semibold`}>
          <li onClick={setYTo0} className='pr-3 py-3 pl-0 hover:text-web-boton duration-300 ease-in-out'><Link to='/Login'>Iniciar sesión</Link></li>
          <li onClick={setYTo0} className='p-3 hover:text-web-boton duration-300 ease-in-out'><Link to='/Signup'>Registrate</Link></li>
          <li onClick={setYTo0} className='p-3 hover:text-web-boton duration-300 ease-in-out'><Link to='/Who'>Quienes somos</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          <img className='h-[30px] filter dark:invert' src="/icons/menu.svg" alt="menu button" />
        </div>
      </div>
      <div onClick={handleNav} className={!nav ? 'fixed left-0 top-0 w-screen h-screen bg-black opacity-40 z-10' : 'fixed bg-transparent left-0 top-0 w-screen h-screen duration-1000 -z-50'}></div>
      <div className={!nav ? 'fixed right-0 top-0 w-[300px] h-screen flex flex-col  border-gray-700 shadow-2xl dark:border-gray-200 bg-web-fondo dark:bg-web-formBgDarkMode duration-500 z-20' : 'fixed right-[-100%] top-0 w-[300px] h-screen flex flex-col duration-500 z-20'}>
        <img onClick={handleNav} className='h-5 self-end mr-3 mt-3 filter dark:invert' src="/icons/cancel.svg" alt="close menu button" />
        <ul className='p-4 dark:text-gray-100'>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Login'>Iniciar sesión</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Signup'>Registrate</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='/Who'>Quienes somos</Link></li>
        </ul>
        <div className="flex gap-5 px-6">
          <img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/instagram.svg" alt="" />
          <img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/twitter.svg" alt="" />
          <img className="social filter dark:invert h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/facebook.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
