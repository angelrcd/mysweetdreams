import '../css/Estadisticas.css'
import Grafica from '../components/Grafica.jsx'
import GraficaLineal from '../components/GraficaLineal'
import GraficaTest from '../components/GraficaTest'

function Estadisticas () {
  return (
  //   <main className='w-screen h-full grid grid-cols-2 grid-rows-2'>
  //   <div className='w-full h-full flex justify-center items-center bg-blue-600'>
  //             <Grafica />
  //       </div>
  //   <div className='w-full h-full flex justify-center items-center bg-red-600'>
  //             <GraficaTest />
  //   </div>
  //       <div className='w-full h-full flex justify-center items-center bg-yellow-600'>
  //             <GraficaLineal />
  //       </div>
  //   <div className='w-full h-full flex justify-center items-center bg-green-600'></div>
  //   </main>

    <main className='w-full h-screen grid grid-cols-2 grid-rows-2 '>
    <div className='w-full h-full flex justify-center items-center bg-blue-600'>
      <Grafica />
    </div>
    <div className='w-full h-full flex justify-center items-center bg-red-600'>
        <GraficaTest />
    </div>
    <div className='w-full h-full flex justify-center items-center bg-yellow-600'>
        <GraficaLineal />
    </div>
    <div className='w-full h-full flex justify-center items-center bg-green-600'></div>
</main>
  )
}

export default Estadisticas
