import './index.css'
import Signup from './views/Signup'
import MainPage from './views/MainPage.jsx'
import Login from './views/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import Who from './views/Who'
import Dashboard from './views/Dashboard'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Who' element={<Who />}/>
        <Route path='/App' element={<Dashboard />}/>
      </Routes>
    </div>
  )
};

export default App
