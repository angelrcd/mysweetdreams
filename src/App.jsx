import './index.css'
import MainPage from './views/MainPage.jsx'
import UserDataForm from './views/UserDataForm.jsx'
import Who from './views/Who'
import Signup from './views/Signup.jsx'
import Login from './views/Login.jsx'
import Dashboard from './views/DashBoard'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/who' element={<Who />}/>
        <Route path='/new-user-form/:id' element={<UserDataForm />}/>
        <Route path='/dashboard/:id' element={<Dashboard />}/>
      </Routes>
    </div>
  )
};

export default App
