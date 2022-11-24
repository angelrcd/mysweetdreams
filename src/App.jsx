import './index.css'
import Signup from './views/Signup'
import MainPage from './views/MainPage.jsx'
import Login from './views/Login.jsx'
import UserDataForm from './views/UserDataForm.jsx'
import Who from './views/Who'
import { Link, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/who' element={<Who />}/>
        <Route path='/new-user-form' element={<UserDataForm />}/>
      </Routes>
    </div>
  )
};

export default App
