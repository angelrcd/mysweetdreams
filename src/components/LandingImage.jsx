import './MainPage.css'
import Button from './Button.jsx'

function LandingImage () {
  return (
    <head className="bg-fixed h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col justify-between" >
      <div className='flex px-28 justify-between pt-6'>
        <div className='flex items-center gap-16 '>
          <img className='h-[150px]' src="/img/logo.png" alt="logo" />
          <h1 className="text-shadow-2 text-white font-bluetea text-6xl">SWEETDREAMS</h1>
        </div>
        <nav className='justify-self-end items-center flex justify-center'>
          <ul className='flex gap-5 text-2xl font-quicksand text-white text-shadow-1a items-center font-semibold text-shadow-1'>
            <li className='hover:text-web-boton duration-300 ease-in-out'><a href="">Iniciar sesión</a></li>
            <li className='hover:text-web-boton duration-300 ease-in-out'><a href="">Registrarse</a></li>
            <li className='hover:text-web-boton duration-300 ease-in-out'><a href="">Quienes somos</a></li>
          </ul>
        </nav>
      </div>
      <div className="text-shadow-1 text-white font-quicksand w-[1200px] px-28">
        <h2 className='text-5xl font-bold'>Aprende a dormir mejor</h2>
        <p className='text-2xl pt-4 font-semibold'>¡Sweetdreams te ayuda a registrar y analizar tus horarios de sueño,
          para ayudarte a sentir mejor y mas descansado!
        </p>
      </div>
      <div className='px-28 mb-20'>
        <Button text="COMENZAR YA" link=""/>
      </div>
    </head>
  )
}

export default LandingImage
