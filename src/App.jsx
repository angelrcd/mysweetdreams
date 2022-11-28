import './index.css'
import MainPage from './views/MainPage.jsx'
import UserDataForm from './views/UserDataForm.jsx'
import Who from './views/Who'
import Signup from './views/Signup.jsx'
import Login from './views/Login.jsx'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Login />
    </div>
  )
};

export default App
