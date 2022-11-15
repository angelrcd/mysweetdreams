import './App.css'
import Signup from './components/Signup'
import MainPage from './components/MainPage.jsx'
import Login from './components/Login.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Who from './components/who/Who'

function App () {
  return (
    <div className='App'>
      <li><Link to='/'>MainPage</Link></li>
      <li><Link to='/Login'>Login</Link></li>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </div>
  )
};

export default App
