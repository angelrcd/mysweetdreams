import './MainPage.css'
import ButtonComenzar from './ButtonComenzar.jsx'

function Description () {
  return (
    <div className= "font-bluetea" id="Description">
      <div id="info" className="h-auto bg-web-fondo flex flex-col justify-center">
        <div className="px-56">
          <h3 className="border-b-4 border-black py-16 px-44 text-3xl text-center">Una experiencia personalizada para que duermas
            mejor
            durante la
            noche y
            estes mas
            despierto durante el día
          </h3>
        </div>
        <div className="py-16 flex justify-around flex-wrap">
          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20" src="/icons/monitor-tv.svg" alt="" />
            <h4 className="text-2xl text-center">Experiencia personalizada</h4>
            <p className="text-center text-gray-600">Nos adaptamos a cada usuario para proporcionar una informacion unica</p>
          </div>

          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20" src="/icons/world.svg" alt="" />
            <h4 className="text-2xl text-center">Todo en uno</h4>
            <p className="text-center text-gray-600">Desde nuestra aplicación podras introducir, gestionar y visualizar todos tus
              datos y recomendaciones</p>
          </div>

          <div className="w-36 flex flex-col gap-4 mx-20 mb-10">
            <img className="h-20" src="/icons/shield.svg" alt="" />
            <h4 className="text-2xl text-center">Segura y eficaz</h4>
            <p className="text-center text-gray-600">Tus datos estan protegidos frente a terceros</p>
          </div>
        </div>
        <div className='flex justify-center'><ButtonComenzar /> </div>
      </div>
    </div>
  )
}

export default Description
