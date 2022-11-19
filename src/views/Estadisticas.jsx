import '../css/Estadisticas.css'
import Grafica from '../components/Grafica.jsx'

function Estadisticas () {
  return (
      <main className='w-5/6 h-full grid grid-cols-2 grid-rows-2 '>
          <div className='w-full h-full flex justify-center items-center bg-blue-600'>
              <Grafica />
          </div>
          <div className='w-full h-full bg-red-600'></div>
          <div className='w-full h-full flex justify-center items-center bg-yellow-600'>
          </div>
          <div className='w-full h-full bg-green-600'></div>
      </main>
  )
}

export default Estadisticas
