import './Login.css'
import TopBar from './TopBar.jsx'
import ContentLogin from './ContentLogin.jsx'

function Login () {
  return (
    <div className="w-full flex flex-col">
        <TopBar />
        <ContentLogin />
    </div>
  )
}

export default Login
