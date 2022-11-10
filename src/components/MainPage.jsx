import './MainPage.css'
import ButtonComenzar from './ButtonComenzar.jsx'
import Description from './Description.jsx'
import Footer from './Footer.jsx'

function MainPage () {
  return (
  <div>
    <div className="bg-fixed w-screen h-screen bg-cover bg-[url('/img/background-night.jpg')] flex flex-col justify-around items-center" >
    <h1 className="text-white font-bluetea text-6xl">SWEETDREAMS</h1>
    <h2 className="text-white font-bluetea text-5xl">Duerme mejor. Siéntete mejor</h2>
    <ButtonComenzar />
    </div>
  <Description />
  <Footer />
    </div>
  )
}

export default MainPage
