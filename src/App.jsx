import './index.css'
import Signup from './views/Signup'
import MainPage from './views/MainPage.jsx'
import Login from './views/Login.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Who from './views/Who'

function App () {
  return (
    <div className='App'>
      <li><Link to='/'>MainPage</Link></li>
      <li><Link to='/Login'>Login</Link></li>
      <li><Link to='/Signup'>Signup</Link></li>
      <li><Link to='/Who'>Who</Link></li>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Who' element={<Who />}/>
      </Routes>
    </div>
  )
};

export default App
