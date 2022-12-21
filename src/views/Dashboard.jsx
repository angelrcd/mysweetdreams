import '../css/MainPage.css'
// import AppNavbar from '../components/AppNavBar'
import { Route, Routes } from 'react-router-dom'
import Resume from './Resume.jsx'
import Estadisticas from './Estadisticas.jsx'
import Calendario from './Calendario.jsx'
import NewData from './NewData.jsx'
import Consejos from './Consejos.jsx'
import AppNavbarTest from '../components/AppNavBarTest.jsx'

function Dashboard () {
  return (
    <div className='bg-slate-800 text-gray-200 flex w-screen h-screen'>
      <AppNavbarTest />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/stats" element={<Estadisticas />} />
        <Route path="/calendar" element={<Calendario />} />
        <Route path="/tips" element={<Consejos />} />
        <Route path="/newData" element={<NewData />} />
      </Routes>
    </div>
  )
}

export default Dashboard
