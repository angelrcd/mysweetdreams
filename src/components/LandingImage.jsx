import '../css/MainPage.css'
import Button from './Button.jsx'
import Navbar from './Navbar'

function LandingImage () {
  return (
    <head className="bg-fixed h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col justify-between" >
      <Navbar />
      <div className="text-shadow-1 text-white font-quicksand w-[1200px] px-28">
        <h2 className='text-5xl font-bold'>Aprende a dormir mejor</h2>
        <p className='text-2xl pt-4 font-semibold'>¡Sweetdreams te ayuda a registrar y analizar tus horarios de sueño,
          para ayudarte a sentir mejor y mas descansado!
        </p>
      </div>
      <div className='px-28 mb-20'>
        <Button text="COMENZAR YA" to=""/>
      </div>
    </head>
  )
}

export default LandingImage
