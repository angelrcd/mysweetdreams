import React, { useState } from 'react'

function Navbar () {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className='w-full text-xl font-bold text-web-boton'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Iniciar sesión</li>
        <li className='p-4'>Registrate</li>
        <li className='p-4'>Quienes somos</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <img className='h-8' src="/icons/cancel.svg" alt=" close menu button" /> : <img className='h-8' src="/icons/menu.svg" alt="menu button" />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-fit border-r border-b border-gray-400 rounded-br-xl bg-web-fondo ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-xl font-bold text-web-boton m-4'>REACT.</h1>

        <ul className='p-4'>
          <li className='p-4 border-b border-gray-400'>Iniciar sesión</li>
          <li className='p-4 border-b border-gray-400'>Registrate</li>
          <li className='p-4'>Quienes somos</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
