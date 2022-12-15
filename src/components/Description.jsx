import '../css/MainPage.css'
import { Link } from 'react-router-dom'

function Description () {
  return (
    <body className= "font-quicksand bg-fixed bg-cover bg-[url('/img/background-night.jpg')]" id="Description">
      <div id="info" className="h-auto flex flex-col justify-center bg-slate-300 dark:bg-[#1b1b32] opacity-95">
        <div className="px-56 ">
          <h3 className="border-b-4 border-black dark:border-gray-100 py-16 px-44 text-4xl text-center font-semibold dark:text-gray-100">Una experiencia personalizada para que duermas
            mejor
            durante la
            noche y
            estes mas
            despierto durante el día
          </h3>
        </div>
        <div className="py-16 flex justify-around flex-wrap dark:text-gray-100">
          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20 svg" src="/icons/monitor-tv.svg" alt="" />
            <h4 className="text-2xl text-center font-bold">Experiencia personalizada</h4>
            <p className="text-center text-gray-600 dark:text-gray-100">Nos adaptamos a cada usuario para proporcionar una informacion unica</p>
          </div>

          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20 svg" src="/icons/world.svg" alt="" />
            <h4 className="text-2xl text-center font-bold">Todo en uno</h4>
            <p className="text-center text-gray-600 dark:text-gray-100">Desde nuestra aplicación podras introducir, gestionar y visualizar todos tus
              datos y recomendaciones</p>
          </div>

          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20 svg" src="/icons/shield.svg" alt="" />
            <h4 className="text-2xl text-center font-bold">Segura y eficaz</h4>
            <p className="text-center text-gray-600 dark:text-gray-100">Tus datos estan protegidos frente a terceros</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link to="/signup">
            <button className="button-web" >
              COMENZAR YA
            </button>
          </Link>
        </div>
      </div>
    </body>
  )
}

export default Description
