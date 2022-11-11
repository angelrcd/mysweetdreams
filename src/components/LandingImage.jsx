import './MainPage.css'
import ButtonComenzar from './ButtonComenzar.jsx'

function LandingImage () {
  return (
    <div className="bg-fixed h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col justify-around items-center" >
      <h1 className="text-white font-bluetea text-7xl">SWEETDREAMS</h1>
      <h2 className="subtitulo text-white font-caveat text-5xl">Duerme mejor. Siéntete mejor</h2>
      <ButtonComenzar />
    </div>
  )
}

export default LandingImage
