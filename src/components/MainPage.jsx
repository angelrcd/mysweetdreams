import './MainPage.css'
import ButtonComenzar from './ButtonComenzar.jsx'

function MainPage () {
  return (
  <div className="bg-fixed w-screen h-screen bg-cover bg-[url('/img/background.jpg')] flex flex-col justify-around items-center" >
    <h1 className="text-white text-6xl">SWEETDREAMS</h1>
    <h2 className="text-white text-5xl">Duerme mejor. Siéntete mejor</h2>
    <ButtonComenzar />
  </div>
  )
}

export default MainPage
