import '../css/Dashboard.css'
import { Route, Routes, Link } from 'react-router-dom'
import Resume from './Resume.jsx'
import Estadisticas from './Estadisticas.jsx'
import Calendario from './Calendario.jsx'
import NewData from './NewData.jsx'
import Consejos from './Consejos.jsx'

function Dashboard () {
  return (
    <div className='w-screen h-screen flex'>
        <nav className='w-1/6 min-w-fit h-full bg-lime-300 flex flex-col justify-center items-center'>
            <section title='profile-info' className='w-full h-1/2 bg-teal-300'>
                <div className='w-full h-1/2 flex justify-center items-center p-2'>
                    <img src="/img/bogallo_profile.jpg" alt="" className='rounded-full max-w-full max-h-full' />
                </div>
                <div className='w-full h-1/2 p-2 flex flex-col justify-center items-center gap-2'>
                    <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-emerald-500'>
                        <h3 title='Nombre de usuario'>Bogallo</h3>
                    </section>
                      {/* <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-amber-500'>
                        <h3 title='Email'>antonio.bogallo@gmail.com</h3>
                    </section> */}
                      <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-fuchsia-400'>
                        <h3 title='Edad'>26</h3>
                    </section>
                </div>
            </section>
            <section title='settings' className='w-full h-1/2 flex flex-col cursor-pointer bg-pink-400'>
              <Link to={'Resume'} className='w-full h-1/5 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Resumen</Link>
              <Link to={'Estadisticas'} className='w-full h-1/5 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Estadísticas</Link>
              <Link to={'Calendario'} className='w-full h-1/5 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Calendario</Link>
              <Link to={'Tips'} className='w-full h-1/5 flex justify-center items-center hover:bg-red-500 border-solid border-black border-x-2 border-t-2'>Consejos</Link>
              <Link to={'NewData'} className='w-full h-1/5 flex justify-center items-center hover:bg-red-500 border-solid border-black border-2'>Añadir datos</Link>
            </section>
        </nav>
      <Routes>
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
        <Route path="/Calendario" element={<Calendario />} />
        <Route path="/Tips" element={<Consejos />} />
        <Route path="/NewData" element={<NewData />} />
      </Routes>
    </div>
  )
}

export default Dashboard
