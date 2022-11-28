import '../css/MainPage.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center md:h-20 h-10 mx-auto px-4 text-black md:bg-transparent bg-white dark:bg-web-formBgDarkMode">
      <Link to='/'><div className='flex items-center gap-5 ml-4'>
        <img className='h-[40px] md:h-[70px]' src="/img/logo.png" alt="logo" />
        <h1 className='hidden xl:block w-full text-xl md:text-4xl font-bold text-shadow-2 text-white font-bluetea'>MYSWEETDREAMS</h1>
      </div></Link>
      <ul className='hidden md:flex text-2xl text-shadow-1 font-semibold text-white'>
        <li className='p-4 hover:text-web-boton duration-300 ease-in-out'><Link to='/Login'>Iniciar sesión</Link></li>
        <li className='p-4 hover:text-web-boton duration-300 ease-in-out'><Link to='/Signup'>Registrate</Link></li>
        <li className='p-4 hover:text-web-boton duration-300 ease-in-out'><Link to='/Who'>Quienes somos</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <img className='h-[30px] filter dark:invert' src="/icons/cancel.svg" alt=" close menu button" /> : <img className='h-[30px] filter dark:invert' src="/icons/menu.svg" alt="menu button" />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] sm:w-[40%] h-fit border-r border-b border-gray-700 dark:border-gray-200 rounded-br-xl bg-web-fondo dark:bg-web-formBgDarkMode ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>

        <h1 className='md:hidden w-full text-lg font-semibold font-bluetea text-web-boton text-shadow-1'>SWEETDREAMS</h1>

        <ul className='p-4 dark:text-gray-100'>
          <li className='p-4 border-b border-gray-700 dark:border-gray-100'><Link to='/Login'>Iniciar sesión</Link></li>
          <li className='p-4 border-b border-gray-700 dark:border-gray-100'><Link to='/Signup'>Registrate</Link></li>
          <li className='p-4'><Link to='/Who'>Quienes somos</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
