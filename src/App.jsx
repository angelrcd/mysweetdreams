import './index.css'
import MainPage from './views/MainPage.jsx'
import UserDataForm from './views/UserDataForm.jsx'
import Who from './views/Who'
import Signup from './views/Signup.jsx'
import Login from './views/Login.jsx'
import Dashboard from './views/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Page404 from './views/Page404'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/who' element={<Who />} />
        <Route path='/new-user-form' element={<UserDataForm />} />
        <Route path='/app/*' element={<Dashboard />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  )
};

export default App
