import '../css/MainPage.css'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { API, SOCIAL } from '../../data'
import UploadPicButton from './UploadPicButton'
import { enableScroll, disableScroll } from '../modules/disableEnableScroll'
import { useGetUserData } from '../modules/useGetUserData'

function AppNavbar () {
  // Detecta si el menu de movil esta abierto
  const [nav, setNav] = useState(true)
  // Detecta si la barra esta visible o no, cambia al hacer scroll
  const [show, setShow] = useState(true)
  // Detecta si el último scroll fue hacia arriba o hacia abajo
  const [lastScrollY, setLastScrollY] = useState(0)

  const { userData, isLoading, error } = useGetUserData()
  const [image, setImage] = useState('/userProfiles/default.png')
  console.log(isLoading)

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

  const fileInput = useRef()
  const selectFile = () => {
    fileInput.current.click()
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
    // fs.writeFileSync(file, '/userProfiles')
    // fs.writeFile('hola', '/userProfiles/hola.txt')
  }

  if (isLoading) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <nav className={`${show ? 'AppNavVisible' : 'AppNavNotVisible'} z-10 w-screen md:w-1/6 md:min-w-[300px] h-10 md:h-screen border-b flex md:flex-col justify-between items-center md:items-start px-4 md:px-0 text-black  bg-white md:bg-red-300 dark:bg-web-formBgDarkMode`}>
        <div className='w-full h-full hidden md:block'>
          <section title='profile-info' className='w-full h-1/2 bg-teal-300'>
            <div className='w-full h-[300px] flex flex-col justify-center items-center p-2'>
              <img src={image} alt="user profile picture" className='rounded-full h-[220px] w-[220px]' />
              <input className='hidden' type="file" ref={fileInput} onChange={onImageChange} />
              <span onClick={selectFile}>
                <UploadPicButton />
              </span>
            </div>
            <div className='relative bottom-8 w-full h-1/2 p-2 flex flex-col justify-center items-center gap-2'>
              <section className='w-full px-5 h-1/3 rounded-3xl flex justify-center items-center bg-emerald-500'>
                <h3 title='Nombre de usuario'>{userData.name} {userData.lastName}</h3>
              </section>
              <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-fuchsia-400'>
                <h3 title='Edad'>{userData.birthdate}</h3>
              </section>
            </div>
          </section>
          <section title='settings' className='w-full h-1/2 flex flex-col cursor-pointer bg-pink-400'>
            <Link to='resume' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Resumen</Link>
            <Link to='stats' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Estadísticas</Link>
            <Link to='calendar' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Calendario</Link>
            <Link to='tips' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Consejos</Link>
            <Link to='newData' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Añadir datos</Link>
            <Link to='newData' className='w-full h-1/6 flex justify-center items-center hover:bg-red-500 border-solid border-black border-2'>Cerrar sesión</Link>
          </section>
        </div>
        <img onClick={handleNav} className='h-[40px] rounded-full md:hidden' src={`/userProfiles/${userData.profilePic}`} alt="user profile picture" />
        <div onClick={handleNav}>
          <img className='h-[30px] filter dark:invert md:hidden' src="/icons/menu.svg" alt="menu button" />
        </div>
      </nav>
      <div onClick={handleNav} className={!nav ? 'fixed left-0 top-0 w-screen h-screen bg-black opacity-40 z-10' : 'fixed bg-transparent left-0 top-0 w-screen h-screen duration-1000 -z-50'}></div>
      <div className={!nav ? 'fixed right-0 top-0 w-[300px] h-screen flex flex-col  border-gray-700 shadow-2xl dark:border-gray-200 bg-web-fondo dark:bg-web-formBgDarkMode duration-500 z-20' : 'fixed right-[-100%] top-0 w-[300px] h-screen flex flex-col duration-500 z-20'}>
        <img onClick={handleNav} className='h-5 self-end mr-3 mt-3 filter dark:invert' src="/icons/cancel.svg" alt="close menu button" />
        <img className='rounded-full w-1/2 self-center' src={`/userProfiles/${userData.profilePic}`} alt="user profile picture" />
        <p className='dark:text-gray-100 text-gray-900 text-center pt-2'>{userData.name} {userData.lastName}</p>
        <ul className='p-4 dark:text-gray-100 text-gray-900'>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='resume'>Resumen</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='stats'>Estadísticas</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='calendar'>Calendario</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='tips'>Consejos</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='newData'>Añadir datos</Link></li>
          <li className='p-2 border-b border-gray-700 dark:border-gray-100'><Link to='newData'>Cerrar sesión</Link></li>
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
