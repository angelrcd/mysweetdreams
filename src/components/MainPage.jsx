import './MainPage.css'

function MainPage () {
  return (
    <div className="bg-fixed w-screen h-screen bg-cover flex flex-col justify-around items-center "
    style="background-image: url('/background.jpg');">
    <h1 className="text-white text-6xl">SWEETDREAMS</h1>
    <h2 className="text-white text-5xl">Duerme mejor. Siéntete mejor</h2>
    <button className="boton-web mb-10">COMENZAR YA</button>
    <div className="flex flex-col">
      <p className="text-white">Mas informacion</p>
    </div>

  </div>
  )
}

export default MainPage
